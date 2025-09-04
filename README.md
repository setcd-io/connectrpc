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

1. Create a new branch for the major.minor version:
   ```bash
   git checkout -b etcd-MAJOR.MINOR
   ```

2. Update the version in `package.json` to match `MAJOR.MINOR.PATCH`

3. Run the upgrade script:
   ```bash
   npm run upgrade
   ```

4. Build and test:
   ```bash
   npm run build
   ```

5. Commit and push:
   ```bash
   git add .
   git commit -m "Update to etcd vMAJOR.MINOR.PATCH"
   git push -u origin etcd-MAJOR.MINOR
   ```

# License

`connectrpc-etcd` is under the MIT license. See the LICENSE file for details.
