import create from "zustand";

// Zustand Stores

type ZustandConnectedType = {
  zco: null | string;
  zcheck: (to: string) => void;
};

const useStoreConnected = create<ZustandConnectedType>((set) => ({
  zco: null,
  zcheck: (val) => {
    console.log("zusatand check");
    set((state) => ({ zco: val }));
  },
}));

//

type ZustandUsernameType = {
  zusername: string | null;
  zSetUsername: (to: string) => void;
};

const useStoreUsername = create<ZustandUsernameType>((set) => ({
  zusername: null,
  zSetUsername: (val) => {
    console.log("zustand change username");
    set((state) => ({ zusername: val }));
  },
}));

//

type ZustandUserIDType = {
  zuserid: string | null;
  zSetUserID: (to: string) => void;
};

const useStoreUserID = create<ZustandUserIDType>((set) => ({
  zuserid: null,
  zSetUserID: (val) => {
    console.log("zustand change username");
    set((state) => ({ zuserid: val }));
  },
}));

//

type ZustandCsrfTokenType = {
  zcsrftoken: string | null;
  zSetCsrfToken: (to: string) => void;
};

const useStoreCsrfToken = create<ZustandCsrfTokenType>((set) => ({
  zcsrftoken: null,
  zSetCsrfToken: (val) => {
    console.log("zustand update csrf");
    set((state) => ({ zcsrftoken: val }));
  },
}));

//
const useStoreCart = create<any>((set) => ({
  zcartState: "prefetch",
  zcartData: null,
  zSetCart: (status, val) => {
    console.log("zustand update cart");
    set(() => ({ zcartState: status, zcartData: val }));
  },
}));

//
type ZustandBarModeType = {
  zbarmode: string | null;
  zSetBarMode: (zbarmode: string) => void;
};

const useStoreBarMode = create<ZustandBarModeType>((set) => ({
  zbarmode: null,
  zSetBarMode: (barmode) => {
    console.log("zustand update bar mode");
    set(() => ({ zbarmode: barmode }));
  },
}));

//

type ZustandBarVisibleType = {
  zisvisible: boolean;
  zSetIsVisible: (visibility: boolean) => void;
};

const useStoreBarVisible = create<ZustandBarVisibleType>((set) => ({
  zisvisible: false,
  zSetIsVisible: (visibility) => {
    console.log("zustand update bar visibility");
    set(() => ({ zisvisible: visibility }));
  },
}));

//

export {
  useStoreConnected,
  useStoreUsername,
  useStoreUserID,
  useStoreCsrfToken,
  useStoreCart,
  useStoreBarMode,
  useStoreBarVisible,
};
