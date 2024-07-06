/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "redux-persist/lib/storage" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storage: any;
  const persistReducer: any;
  export default { storage, persistReducer };
}
