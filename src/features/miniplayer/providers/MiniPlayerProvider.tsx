import React, { createContext, useContext, useState } from 'react';

export const MiniPlayerContext = createContext({
  onBottomBarNavigation: true,
  setOnBottomBarNavigation(val: boolean) {
    console.info('On Bottom bar navigation:', val);
  },

  bottomBarHeight: 0,
  setBottomBarHeight(val: number) {
    console.info('Bottom bar height: ', val);
  },
});

export function useMiniPlayer() {
  return useContext(MiniPlayerContext);
}

interface MiniPlayerProviderProps {
  children: React.ReactNode;
}

export function MiniPlayerProvider(props: MiniPlayerProviderProps) {
  const [bottomBarHeight, setBottomBarHeight] = useState(0);
  const [onBottomBarNavigation, setOnBottomBarNavigation] = useState(true);

  return (
    <MiniPlayerContext.Provider
      value={{
        bottomBarHeight,
        setBottomBarHeight,
        onBottomBarNavigation,
        setOnBottomBarNavigation,
      }}
    >
      {props.children}
    </MiniPlayerContext.Provider>
  );
}
