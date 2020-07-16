import * as React from 'react';
import { translate } from './utils'

const TOGGLE_HOTKEY = '`';

export const useGeoField = (initialValue = '', toggleHotkey) => {
  const [fieldValue, setFieldValue] = React.useState(initialValue);
  const [on, setOn] = React.useState(true);

  const toggleLang = () => setOn(prev => !prev);

  const handleChange = event => {
    const { value } = event.target;

    if (value.includes(toggleHotkey || TOGGLE_HOTKEY)) {
      toggleLang();
      return;
    }

    if (!on) {
      setFieldValue(value);
      return;
    }

    setFieldValue(translate(value));
  };

  return React.useMemo(
    () => [fieldValue, handleChange, on], [fieldValue, handleChange, on]
  );
};
