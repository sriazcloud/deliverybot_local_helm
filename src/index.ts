import { getApp } from "./app";
import { InMemStore } from "./store";
import { apps } from "./apps";

const store = new InMemStore<any>();

export = getApp(apps, {
  kvStore: () => store,
  lockStore: () => store
});
