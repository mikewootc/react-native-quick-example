#!/bin/bash

yarn install
react-native link

# 如果报错: Error: While resolving module react-native-vector-icons/MaterialIcons, the Haste package react-native-vector-icons was found
# 则运行该命令:
# rm -f ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json

# vim:set tw=0:
