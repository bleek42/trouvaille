import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { Route, Link, NativeRouter } from 'react-router-native';

import Home from './Home';
import Login from './Login';
import Register from './Register';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = (): void => setToggle(!toggle);

  return (
    <NativeRouter>
      <SafeAreaView>
        {toggle ? (
          <View>
            <Text>Open</Text>
            <Button title="open" onPress={handleToggle} />
          </View>
        ) : (
          <View>
            <Text>Close</Text>
            <Button title="close" onPress={handleToggle} />
            <View>
              <Link to="/">
                <Text>Home</Text>
              </Link>
              <Link to="/login">
                <Text>Login</Text>
              </Link>
              <Link to="/register">
                <Text>Register</Text>
              </Link>
            </View>
          </View>
        )}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </SafeAreaView>
    </NativeRouter>
  );
};
export default Navbar;
