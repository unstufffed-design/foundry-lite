"use client";

import { Plus, Trash2 } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type WorkspaceItem = { id: string; title: string; created_at: string };

const storageKey = "foundry-lite-workspace-items";
const storageEvent = "foundry-lite-storage-update";
const unavailableSnapshot = "__foundry-lite-storage-unavailable__";

function isWorkspaceItem(value: unknown): value is WorkspaceItem {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "string" &&
    typeof item.title === "string" &&
    typeof item.created_at === "string"
  );
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(storageEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(storageEvent, callback);
  };
}

function getStorageSnapshot() {
  try {
    return window.localStorage.getItem(storageKey);
  } catch {
    return unavailableSnapshot;
  }
}

function readItems(snapshot: string | null) {
  if (snapshot === unavailableSnapshot) {
    return {
      items: [],
      error: "Browser storage is unavailable; workspace notes cannot be loaded.",
    };
  }
  if (!snapshot) return { items: [], error: "" };

  try {
    const parsed: unknown = JSON.parse(snapshot);
    if (!Array.isArray(parsed)) {
      throw new Error("Saved workspace data has an invalid format.");
    }

    const items: WorkspaceItem[] = [];
    for (const item of parsed) {
      if (!isWorkspaceItem(item)) {
        throw new Error("Saved workspace data has an invalid format.");
      }
      items.push(item);
    }
    return { items, error: "" };
  } catch (storageError) {
    return {
      items: [],
      error:
        storageError instanceof Error
          ? storageError.message
          : "Could not read workspace data from this browser.",
    };
  }
}

export function ItemsManager() {
  const snapshot = useSyncExternalStore(
    subscribeToStorage,
    getStorageSnapshot,
    () => null,
  );
  const { items, error: readError } = readItems(snapshot);
  const [title, setTitle] = useState("");
  const [writeError, setWriteError] = useState("");
  const error = readError || writeError;

  function saveItems(nextItems: WorkspaceItem[]) {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(nextItems));
      setWriteError("");
      window.dispatchEvent(new Event(storageEvent));
      return true;
    } catch (storageError) {
      setWriteError(
        storageError instanceof Error
          ? storageError.message
          : "Could not save workspace data in this browser.",
      );
      return false;
    }
  }

  function addItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) return;
    const saved = saveItems([
      {
        id: crypto.randomUUID(),
        title: cleanTitle,
        created_at: new Date().toISOString(),
      },
      ...items,
    ]);
    if (saved) setTitle("");
  }

  function removeItem(id: string) {
    saveItems(items.filter((item) => item.id !== id));
  }

  return (
    <section className="items-panel" id="items">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">WORKSPACE</p>
          <h2>Quick notes</h2>
        </div>
        <span className="item-count" aria-live="polite" aria-atomic="true">
          {`${items.length} ${items.length === 1 ? "item" : "items"}`}
        </span>
      </div>
      <form className="item-form" onSubmit={addItem}>
        <Input
          aria-label="New workspace note"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Add a note or task..."
          maxLength={120}
          required
        />
        <Button type="submit" disabled={!title.trim()}>
          <Plus size={16} /> Add item
        </Button>
      </form>
      {error && (
        <p className="inline-error" role="alert">
          {error}
        </p>
      )}
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id}>
            <span className="item-bullet" />
            <span className="item-title">{item.title}</span>
            <time dateTime={item.created_at}>
              {new Date(item.created_at).toLocaleDateString()}
            </time>
            <button
              className="icon-button item-delete"
              type="button"
              aria-label={`Delete ${item.title}`}
              onClick={() => removeItem(item.id)}>
              <Trash2 size={16} />
            </button>
          </li>
        ))}
        {items.length === 0 && (
          <li className="empty-items">
            Your workspace is clear. Add an item to try the CRUD example.
          </li>
        )}
      </ul>
    </section>
  );
}
