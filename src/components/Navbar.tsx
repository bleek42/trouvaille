import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { Link } from 'react-router-native';

interface NavbarState {
  open: boolean;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<NavbarState | boolean>(false);

  const toggleOpen = (): void => setOpen((prevopen) => !!prevopen);

  return (
    <SafeAreaView>
      {open ? (
        <Button title="open" onPress={toggleOpen} />
      ) : (
        <Button title="close" onPress={toggleOpen} />
      )}
    </SafeAreaView>
  );
};
export default Navbar;
