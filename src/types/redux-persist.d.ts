/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "redux-persist/lib/storage" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storage: any;

  export default storage;
}
declare module "redux-persist/es/persistReducer" {
  import { Reducer } from "redux";
  import { PersistConfig } from "redux-persist";

  export default function persistReducer<S, A>(
    config: PersistConfig<S>,
    baseReducer: Reducer<S, A>
  ): Reducer<S, A>;
}
