# ConnectRPC Protobuf Bindings for Etcd Client/Server

The following repository contains generated protobuf files for Etcd Server using ConnectRPC.

## Packages

### Node / JS / TS Ecosystem

```
npm install git+https://github.com/setcd-io/connectrpc-etcd.git#etcd-3.5
```

### Golang

Coming Soon

## Development

- The branch names on this repository matches the `major.minor` version of `etcd`.
- A pinned version of `etcd` is pulled in as a `.gitmodule`
- The `version` in `package.json` matches `major.minor.patch` version of `etcd`.

1. Run the following commands:

   ```
   git submodule update --init --recursive
   npm install
   npm run build
   ```

### Updating to a new version of `etcd`

1. Run the following commands:

   ```bash
   git submodule deinit --all --force
   rm -rf .git/modules
   rm -fr etcd
   git clean -fdx
   git reset --hard
   git submodule update --init --recursive
   cd etcd
   git fetch --tags
   git checkout tags/v3.5.21
   cd ..
   git add .
   git commit -m "Update to etcd v3.5.21"
   git push
   ```

# License

`connectrpc-etcd` is under the MIT license. See the LICENSE file for details.
