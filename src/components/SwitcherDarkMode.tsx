import { useLayoutEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useDarkModeStore } from '@/hooks/useDarkModeStore';

import useDarkSide from '../hooks/useDarkSide';

export default function Switcher() {
  const { setIsDark, isDark } = useDarkModeStore((state) => ({
    setIsDark: state.setIsDark,
    isDark: state.isDark,
  }));
  const { colorTheme, setTheme } = useDarkSide();
  const [, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  useLayoutEffect(() => {
    setIsDark(colorTheme === 'light' ? true : false);
    setDarkSide(colorTheme === 'light' ? true : false);
  }, [colorTheme]);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setIsDark(checked);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: '2rem' }}
        // checked={darkSide}
        checked={isDark}
        onChange={toggleDarkMode}
        size={30}
        // sunColor='red'
        // moonColor='#34d399'
        // className='text-black dark:fill-primary-400 dark:text-primary-400'
      />
    </>
  );
}
