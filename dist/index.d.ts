import { GenFile, GenMessage, GenEnum, GenService, GenExtension } from '@bufbuild/protobuf/codegenv1';
import { Message } from '@bufbuild/protobuf';
import { MessageOptions, FieldOptions, EnumOptions, EnumValueOptions } from '@bufbuild/protobuf/wkt';

/**
 * Describes the file etcd/api/authpb/auth.proto.
 */
declare const file_etcd_api_authpb_auth: GenFile;
/**
 * @generated from message authpb.UserAddOptions
 */
type UserAddOptions = Message<"authpb.UserAddOptions"> & {
    /**
     * @generated from field: bool no_password = 1;
     */
    noPassword: boolean;
};
/**
 * Describes the message authpb.UserAddOptions.
 * Use `create(UserAddOptionsSchema)` to create a new message.
 */
declare const UserAddOptionsSchema: GenMessage<UserAddOptions>;
/**
 * User is a single entry in the bucket authUsers
 *
 * @generated from message authpb.User
 */
type User = Message<"authpb.User"> & {
    /**
     * @generated from field: bytes name = 1;
     */
    name: Uint8Array;
    /**
     * @generated from field: bytes password = 2;
     */
    password: Uint8Array;
    /**
     * @generated from field: repeated string roles = 3;
     */
    roles: string[];
    /**
     * @generated from field: authpb.UserAddOptions options = 4;
     */
    options?: UserAddOptions;
};
/**
 * Describes the message authpb.User.
 * Use `create(UserSchema)` to create a new message.
 */
declare const UserSchema: GenMessage<User>;
/**
 * Permission is a single entity
 *
 * @generated from message authpb.Permission
 */
type Permission = Message<"authpb.Permission"> & {
    /**
     * @generated from field: authpb.Permission.Type permType = 1;
     */
    permType: Permission_Type;
    /**
     * @generated from field: bytes key = 2;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes range_end = 3;
     */
    rangeEnd: Uint8Array;
};
/**
 * Describes the message authpb.Permission.
 * Use `create(PermissionSchema)` to create a new message.
 */
declare const PermissionSchema: GenMessage<Permission>;
/**
 * @generated from enum authpb.Permission.Type
 */
declare enum Permission_Type {
    /**
     * @generated from enum value: READ = 0;
     */
    READ = 0,
    /**
     * @generated from enum value: WRITE = 1;
     */
    WRITE = 1,
    /**
     * @generated from enum value: READWRITE = 2;
     */
    READWRITE = 2
}
/**
 * Describes the enum authpb.Permission.Type.
 */
declare const Permission_TypeSchema: GenEnum<Permission_Type>;
/**
 * Role is a single entry in the bucket authRoles
 *
 * @generated from message authpb.Role
 */
type Role = Message<"authpb.Role"> & {
    /**
     * @generated from field: bytes name = 1;
     */
    name: Uint8Array;
    /**
     * @generated from field: repeated authpb.Permission keyPermission = 2;
     */
    keyPermission: Permission[];
};
/**
 * Describes the message authpb.Role.
 * Use `create(RoleSchema)` to create a new message.
 */
declare const RoleSchema: GenMessage<Role>;

/**
 * Describes the file etcd/api/etcdserverpb/etcdserver.proto.
 */
declare const file_etcd_api_etcdserverpb_etcdserver: GenFile;
/**
 * @generated from message etcdserverpb.Request
 */
type Request = Message<"etcdserverpb.Request"> & {
    /**
     * @generated from field: optional uint64 ID = 1;
     */
    ID: bigint;
    /**
     * @generated from field: optional string Method = 2;
     */
    Method: string;
    /**
     * @generated from field: optional string Path = 3;
     */
    Path: string;
    /**
     * @generated from field: optional string Val = 4;
     */
    Val: string;
    /**
     * @generated from field: optional bool Dir = 5;
     */
    Dir: boolean;
    /**
     * @generated from field: optional string PrevValue = 6;
     */
    PrevValue: string;
    /**
     * @generated from field: optional uint64 PrevIndex = 7;
     */
    PrevIndex: bigint;
    /**
     * @generated from field: optional bool PrevExist = 8;
     */
    PrevExist: boolean;
    /**
     * @generated from field: optional int64 Expiration = 9;
     */
    Expiration: bigint;
    /**
     * @generated from field: optional bool Wait = 10;
     */
    Wait: boolean;
    /**
     * @generated from field: optional uint64 Since = 11;
     */
    Since: bigint;
    /**
     * @generated from field: optional bool Recursive = 12;
     */
    Recursive: boolean;
    /**
     * @generated from field: optional bool Sorted = 13;
     */
    Sorted: boolean;
    /**
     * @generated from field: optional bool Quorum = 14;
     */
    Quorum: boolean;
    /**
     * @generated from field: optional int64 Time = 15;
     */
    Time: bigint;
    /**
     * @generated from field: optional bool Stream = 16;
     */
    Stream: boolean;
    /**
     * @generated from field: optional bool Refresh = 17;
     */
    Refresh: boolean;
};
/**
 * Describes the message etcdserverpb.Request.
 * Use `create(RequestSchema)` to create a new message.
 */
declare const RequestSchema: GenMessage<Request>;
/**
 * @generated from message etcdserverpb.Metadata
 */
type Metadata = Message<"etcdserverpb.Metadata"> & {
    /**
     * @generated from field: optional uint64 NodeID = 1;
     */
    NodeID: bigint;
    /**
     * @generated from field: optional uint64 ClusterID = 2;
     */
    ClusterID: bigint;
};
/**
 * Describes the message etcdserverpb.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
declare const MetadataSchema: GenMessage<Metadata>;

/**
 * Describes the file etcd/api/mvccpb/kv.proto.
 */
declare const file_etcd_api_mvccpb_kv: GenFile;
/**
 * @generated from message mvccpb.KeyValue
 */
type KeyValue = Message<"mvccpb.KeyValue"> & {
    /**
     * key is the key in bytes. An empty key is not allowed.
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * create_revision is the revision of last creation on this key.
     *
     * @generated from field: int64 create_revision = 2;
     */
    createRevision: bigint;
    /**
     * mod_revision is the revision of last modification on this key.
     *
     * @generated from field: int64 mod_revision = 3;
     */
    modRevision: bigint;
    /**
     * version is the version of the key. A deletion resets
     * the version to zero and any modification of the key
     * increases its version.
     *
     * @generated from field: int64 version = 4;
     */
    version: bigint;
    /**
     * value is the value held by the key, in bytes.
     *
     * @generated from field: bytes value = 5;
     */
    value: Uint8Array;
    /**
     * lease is the ID of the lease that attached to key.
     * When the attached lease expires, the key will be deleted.
     * If lease is 0, then no lease is attached to the key.
     *
     * @generated from field: int64 lease = 6;
     */
    lease: bigint;
};
/**
 * Describes the message mvccpb.KeyValue.
 * Use `create(KeyValueSchema)` to create a new message.
 */
declare const KeyValueSchema: GenMessage<KeyValue>;
/**
 * @generated from message mvccpb.Event
 */
type Event = Message<"mvccpb.Event"> & {
    /**
     * type is the kind of event. If type is a PUT, it indicates
     * new data has been stored to the key. If type is a DELETE,
     * it indicates the key was deleted.
     *
     * @generated from field: mvccpb.Event.EventType type = 1;
     */
    type: Event_EventType;
    /**
     * kv holds the KeyValue for the event.
     * A PUT event contains current kv pair.
     * A PUT event with kv.Version=1 indicates the creation of a key.
     * A DELETE/EXPIRE event contains the deleted key with
     * its modification revision set to the revision of deletion.
     *
     * @generated from field: mvccpb.KeyValue kv = 2;
     */
    kv?: KeyValue;
    /**
     * prev_kv holds the key-value pair before the event happens.
     *
     * @generated from field: mvccpb.KeyValue prev_kv = 3;
     */
    prevKv?: KeyValue;
};
/**
 * Describes the message mvccpb.Event.
 * Use `create(EventSchema)` to create a new message.
 */
declare const EventSchema: GenMessage<Event>;
/**
 * @generated from enum mvccpb.Event.EventType
 */
declare enum Event_EventType {
    /**
     * @generated from enum value: PUT = 0;
     */
    PUT = 0,
    /**
     * @generated from enum value: DELETE = 1;
     */
    DELETE = 1
}
/**
 * Describes the enum mvccpb.Event.EventType.
 */
declare const Event_EventTypeSchema: GenEnum<Event_EventType>;

/**
 * Describes the file etcd/api/etcdserverpb/rpc.proto.
 */
declare const file_etcd_api_etcdserverpb_rpc: GenFile;
/**
 * @generated from message etcdserverpb.ResponseHeader
 */
type ResponseHeader = Message<"etcdserverpb.ResponseHeader"> & {
    /**
     * cluster_id is the ID of the cluster which sent the response.
     *
     * @generated from field: uint64 cluster_id = 1;
     */
    clusterId: bigint;
    /**
     * member_id is the ID of the member which sent the response.
     *
     * @generated from field: uint64 member_id = 2;
     */
    memberId: bigint;
    /**
     * revision is the key-value store revision when the request was applied, and it's
     * unset (so 0) in case of calls not interacting with key-value store.
     * For watch progress responses, the header.revision indicates progress. All future events
     * received in this stream are guaranteed to have a higher revision number than the
     * header.revision number.
     *
     * @generated from field: int64 revision = 3;
     */
    revision: bigint;
    /**
     * raft_term is the raft term when the request was applied.
     *
     * @generated from field: uint64 raft_term = 4;
     */
    raftTerm: bigint;
};
/**
 * Describes the message etcdserverpb.ResponseHeader.
 * Use `create(ResponseHeaderSchema)` to create a new message.
 */
declare const ResponseHeaderSchema: GenMessage<ResponseHeader>;
/**
 * @generated from message etcdserverpb.RangeRequest
 */
type RangeRequest = Message<"etcdserverpb.RangeRequest"> & {
    /**
     * key is the first key for the range. If range_end is not given, the request only looks up key.
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * range_end is the upper bound on the requested range [key, range_end).
     * If range_end is '\0', the range is all keys >= key.
     * If range_end is key plus one (e.g., "aa"+1 == "ab", "a\xff"+1 == "b"),
     * then the range request gets all keys prefixed with key.
     * If both key and range_end are '\0', then the range request returns all keys.
     *
     * @generated from field: bytes range_end = 2;
     */
    rangeEnd: Uint8Array;
    /**
     * limit is a limit on the number of keys returned for the request. When limit is set to 0,
     * it is treated as no limit.
     *
     * @generated from field: int64 limit = 3;
     */
    limit: bigint;
    /**
     * revision is the point-in-time of the key-value store to use for the range.
     * If revision is less or equal to zero, the range is over the newest key-value store.
     * If the revision has been compacted, ErrCompacted is returned as a response.
     *
     * @generated from field: int64 revision = 4;
     */
    revision: bigint;
    /**
     * sort_order is the order for returned sorted results.
     *
     * @generated from field: etcdserverpb.RangeRequest.SortOrder sort_order = 5;
     */
    sortOrder: RangeRequest_SortOrder;
    /**
     * sort_target is the key-value field to use for sorting.
     *
     * @generated from field: etcdserverpb.RangeRequest.SortTarget sort_target = 6;
     */
    sortTarget: RangeRequest_SortTarget;
    /**
     * serializable sets the range request to use serializable member-local reads.
     * Range requests are linearizable by default; linearizable requests have higher
     * latency and lower throughput than serializable requests but reflect the current
     * consensus of the cluster. For better performance, in exchange for possible stale reads,
     * a serializable range request is served locally without needing to reach consensus
     * with other nodes in the cluster.
     *
     * @generated from field: bool serializable = 7;
     */
    serializable: boolean;
    /**
     * keys_only when set returns only the keys and not the values.
     *
     * @generated from field: bool keys_only = 8;
     */
    keysOnly: boolean;
    /**
     * count_only when set returns only the count of the keys in the range.
     *
     * @generated from field: bool count_only = 9;
     */
    countOnly: boolean;
    /**
     * min_mod_revision is the lower bound for returned key mod revisions; all keys with
     * lesser mod revisions will be filtered away.
     *
     * @generated from field: int64 min_mod_revision = 10;
     */
    minModRevision: bigint;
    /**
     * max_mod_revision is the upper bound for returned key mod revisions; all keys with
     * greater mod revisions will be filtered away.
     *
     * @generated from field: int64 max_mod_revision = 11;
     */
    maxModRevision: bigint;
    /**
     * min_create_revision is the lower bound for returned key create revisions; all keys with
     * lesser create revisions will be filtered away.
     *
     * @generated from field: int64 min_create_revision = 12;
     */
    minCreateRevision: bigint;
    /**
     * max_create_revision is the upper bound for returned key create revisions; all keys with
     * greater create revisions will be filtered away.
     *
     * @generated from field: int64 max_create_revision = 13;
     */
    maxCreateRevision: bigint;
};
/**
 * Describes the message etcdserverpb.RangeRequest.
 * Use `create(RangeRequestSchema)` to create a new message.
 */
declare const RangeRequestSchema: GenMessage<RangeRequest>;
/**
 * @generated from enum etcdserverpb.RangeRequest.SortOrder
 */
declare enum RangeRequest_SortOrder {
    /**
     * default, no sorting
     *
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * lowest target value first
     *
     * @generated from enum value: ASCEND = 1;
     */
    ASCEND = 1,
    /**
     * highest target value first
     *
     * @generated from enum value: DESCEND = 2;
     */
    DESCEND = 2
}
/**
 * Describes the enum etcdserverpb.RangeRequest.SortOrder.
 */
declare const RangeRequest_SortOrderSchema: GenEnum<RangeRequest_SortOrder>;
/**
 * @generated from enum etcdserverpb.RangeRequest.SortTarget
 */
declare enum RangeRequest_SortTarget {
    /**
     * @generated from enum value: KEY = 0;
     */
    KEY = 0,
    /**
     * @generated from enum value: VERSION = 1;
     */
    VERSION = 1,
    /**
     * @generated from enum value: CREATE = 2;
     */
    CREATE = 2,
    /**
     * @generated from enum value: MOD = 3;
     */
    MOD = 3,
    /**
     * @generated from enum value: VALUE = 4;
     */
    VALUE = 4
}
/**
 * Describes the enum etcdserverpb.RangeRequest.SortTarget.
 */
declare const RangeRequest_SortTargetSchema: GenEnum<RangeRequest_SortTarget>;
/**
 * @generated from message etcdserverpb.RangeResponse
 */
type RangeResponse = Message<"etcdserverpb.RangeResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * kvs is the list of key-value pairs matched by the range request.
     * kvs is empty when count is requested.
     *
     * @generated from field: repeated mvccpb.KeyValue kvs = 2;
     */
    kvs: KeyValue[];
    /**
     * more indicates if there are more keys to return in the requested range.
     *
     * @generated from field: bool more = 3;
     */
    more: boolean;
    /**
     * count is set to the actual number of keys within the range when requested.
     * Unlike Kvs, it is unaffected by limits and filters (e.g., Min/Max, Create/Modify, Revisions)
     * and reflects the full count within the specified range.
     *
     * @generated from field: int64 count = 4;
     */
    count: bigint;
};
/**
 * Describes the message etcdserverpb.RangeResponse.
 * Use `create(RangeResponseSchema)` to create a new message.
 */
declare const RangeResponseSchema: GenMessage<RangeResponse>;
/**
 * @generated from message etcdserverpb.PutRequest
 */
type PutRequest = Message<"etcdserverpb.PutRequest"> & {
    /**
     * key is the key, in bytes, to put into the key-value store.
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * value is the value, in bytes, to associate with the key in the key-value store.
     *
     * @generated from field: bytes value = 2;
     */
    value: Uint8Array;
    /**
     * lease is the lease ID to associate with the key in the key-value store. A lease
     * value of 0 indicates no lease.
     *
     * @generated from field: int64 lease = 3;
     */
    lease: bigint;
    /**
     * If prev_kv is set, etcd gets the previous key-value pair before changing it.
     * The previous key-value pair will be returned in the put response.
     *
     * @generated from field: bool prev_kv = 4;
     */
    prevKv: boolean;
    /**
     * If ignore_value is set, etcd updates the key using its current value.
     * Returns an error if the key does not exist.
     *
     * @generated from field: bool ignore_value = 5;
     */
    ignoreValue: boolean;
    /**
     * If ignore_lease is set, etcd updates the key using its current lease.
     * Returns an error if the key does not exist.
     *
     * @generated from field: bool ignore_lease = 6;
     */
    ignoreLease: boolean;
};
/**
 * Describes the message etcdserverpb.PutRequest.
 * Use `create(PutRequestSchema)` to create a new message.
 */
declare const PutRequestSchema: GenMessage<PutRequest>;
/**
 * @generated from message etcdserverpb.PutResponse
 */
type PutResponse = Message<"etcdserverpb.PutResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * if prev_kv is set in the request, the previous key-value pair will be returned.
     *
     * @generated from field: mvccpb.KeyValue prev_kv = 2;
     */
    prevKv?: KeyValue;
};
/**
 * Describes the message etcdserverpb.PutResponse.
 * Use `create(PutResponseSchema)` to create a new message.
 */
declare const PutResponseSchema: GenMessage<PutResponse>;
/**
 * @generated from message etcdserverpb.DeleteRangeRequest
 */
type DeleteRangeRequest = Message<"etcdserverpb.DeleteRangeRequest"> & {
    /**
     * key is the first key to delete in the range.
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * range_end is the key following the last key to delete for the range [key, range_end).
     * If range_end is not given, the range is defined to contain only the key argument.
     * If range_end is one bit larger than the given key, then the range is all the keys
     * with the prefix (the given key).
     * If range_end is '\0', the range is all keys greater than or equal to the key argument.
     *
     * @generated from field: bytes range_end = 2;
     */
    rangeEnd: Uint8Array;
    /**
     * If prev_kv is set, etcd gets the previous key-value pairs before deleting it.
     * The previous key-value pairs will be returned in the delete response.
     *
     * @generated from field: bool prev_kv = 3;
     */
    prevKv: boolean;
};
/**
 * Describes the message etcdserverpb.DeleteRangeRequest.
 * Use `create(DeleteRangeRequestSchema)` to create a new message.
 */
declare const DeleteRangeRequestSchema: GenMessage<DeleteRangeRequest>;
/**
 * @generated from message etcdserverpb.DeleteRangeResponse
 */
type DeleteRangeResponse = Message<"etcdserverpb.DeleteRangeResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * deleted is the number of keys deleted by the delete range request.
     *
     * @generated from field: int64 deleted = 2;
     */
    deleted: bigint;
    /**
     * if prev_kv is set in the request, the previous key-value pairs will be returned.
     *
     * @generated from field: repeated mvccpb.KeyValue prev_kvs = 3;
     */
    prevKvs: KeyValue[];
};
/**
 * Describes the message etcdserverpb.DeleteRangeResponse.
 * Use `create(DeleteRangeResponseSchema)` to create a new message.
 */
declare const DeleteRangeResponseSchema: GenMessage<DeleteRangeResponse>;
/**
 * @generated from message etcdserverpb.RequestOp
 */
type RequestOp = Message<"etcdserverpb.RequestOp"> & {
    /**
     * request is a union of request types accepted by a transaction.
     *
     * @generated from oneof etcdserverpb.RequestOp.request
     */
    request: {
        /**
         * @generated from field: etcdserverpb.RangeRequest request_range = 1;
         */
        value: RangeRequest;
        case: "requestRange";
    } | {
        /**
         * @generated from field: etcdserverpb.PutRequest request_put = 2;
         */
        value: PutRequest;
        case: "requestPut";
    } | {
        /**
         * @generated from field: etcdserverpb.DeleteRangeRequest request_delete_range = 3;
         */
        value: DeleteRangeRequest;
        case: "requestDeleteRange";
    } | {
        /**
         * @generated from field: etcdserverpb.TxnRequest request_txn = 4;
         */
        value: TxnRequest;
        case: "requestTxn";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message etcdserverpb.RequestOp.
 * Use `create(RequestOpSchema)` to create a new message.
 */
declare const RequestOpSchema: GenMessage<RequestOp>;
/**
 * @generated from message etcdserverpb.ResponseOp
 */
type ResponseOp = Message<"etcdserverpb.ResponseOp"> & {
    /**
     * response is a union of response types returned by a transaction.
     *
     * @generated from oneof etcdserverpb.ResponseOp.response
     */
    response: {
        /**
         * @generated from field: etcdserverpb.RangeResponse response_range = 1;
         */
        value: RangeResponse;
        case: "responseRange";
    } | {
        /**
         * @generated from field: etcdserverpb.PutResponse response_put = 2;
         */
        value: PutResponse;
        case: "responsePut";
    } | {
        /**
         * @generated from field: etcdserverpb.DeleteRangeResponse response_delete_range = 3;
         */
        value: DeleteRangeResponse;
        case: "responseDeleteRange";
    } | {
        /**
         * @generated from field: etcdserverpb.TxnResponse response_txn = 4;
         */
        value: TxnResponse;
        case: "responseTxn";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message etcdserverpb.ResponseOp.
 * Use `create(ResponseOpSchema)` to create a new message.
 */
declare const ResponseOpSchema: GenMessage<ResponseOp>;
/**
 * @generated from message etcdserverpb.Compare
 */
type Compare = Message<"etcdserverpb.Compare"> & {
    /**
     * result is logical comparison operation for this comparison.
     *
     * @generated from field: etcdserverpb.Compare.CompareResult result = 1;
     */
    result: Compare_CompareResult;
    /**
     * target is the key-value field to inspect for the comparison.
     *
     * @generated from field: etcdserverpb.Compare.CompareTarget target = 2;
     */
    target: Compare_CompareTarget;
    /**
     * key is the subject key for the comparison operation.
     *
     * @generated from field: bytes key = 3;
     */
    key: Uint8Array;
    /**
     * @generated from oneof etcdserverpb.Compare.target_union
     */
    targetUnion: {
        /**
         * version is the version of the given key
         *
         * @generated from field: int64 version = 4;
         */
        value: bigint;
        case: "version";
    } | {
        /**
         * create_revision is the creation revision of the given key
         *
         * @generated from field: int64 create_revision = 5;
         */
        value: bigint;
        case: "createRevision";
    } | {
        /**
         * mod_revision is the last modified revision of the given key.
         *
         * @generated from field: int64 mod_revision = 6;
         */
        value: bigint;
        case: "modRevision";
    } | {
        /**
         * value is the value of the given key, in bytes.
         *
         * @generated from field: bytes value = 7;
         */
        value: Uint8Array;
        case: "value";
    } | {
        /**
         * lease is the lease id of the given key.
         *
         * leave room for more target_union field tags, jump to 64
         *
         * @generated from field: int64 lease = 8;
         */
        value: bigint;
        case: "lease";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * range_end compares the given target to all keys in the range [key, range_end).
     * See RangeRequest for more details on key ranges.
     *
     * TODO: fill out with most of the rest of RangeRequest fields when needed.
     *
     * @generated from field: bytes range_end = 64;
     */
    rangeEnd: Uint8Array;
};
/**
 * Describes the message etcdserverpb.Compare.
 * Use `create(CompareSchema)` to create a new message.
 */
declare const CompareSchema: GenMessage<Compare>;
/**
 * @generated from enum etcdserverpb.Compare.CompareResult
 */
declare enum Compare_CompareResult {
    /**
     * @generated from enum value: EQUAL = 0;
     */
    EQUAL = 0,
    /**
     * @generated from enum value: GREATER = 1;
     */
    GREATER = 1,
    /**
     * @generated from enum value: LESS = 2;
     */
    LESS = 2,
    /**
     * @generated from enum value: NOT_EQUAL = 3;
     */
    NOT_EQUAL = 3
}
/**
 * Describes the enum etcdserverpb.Compare.CompareResult.
 */
declare const Compare_CompareResultSchema: GenEnum<Compare_CompareResult>;
/**
 * @generated from enum etcdserverpb.Compare.CompareTarget
 */
declare enum Compare_CompareTarget {
    /**
     * @generated from enum value: VERSION = 0;
     */
    VERSION = 0,
    /**
     * @generated from enum value: CREATE = 1;
     */
    CREATE = 1,
    /**
     * @generated from enum value: MOD = 2;
     */
    MOD = 2,
    /**
     * @generated from enum value: VALUE = 3;
     */
    VALUE = 3,
    /**
     * @generated from enum value: LEASE = 4;
     */
    LEASE = 4
}
/**
 * Describes the enum etcdserverpb.Compare.CompareTarget.
 */
declare const Compare_CompareTargetSchema: GenEnum<Compare_CompareTarget>;
/**
 * From google paxosdb paper:
 * Our implementation hinges around a powerful primitive which we call MultiOp. All other database
 * operations except for iteration are implemented as a single call to MultiOp. A MultiOp is applied atomically
 * and consists of three components:
 * 1. A list of tests called guard. Each test in guard checks a single entry in the database. It may check
 * for the absence or presence of a value, or compare with a given value. Two different tests in the guard
 * may apply to the same or different entries in the database. All tests in the guard are applied and
 * MultiOp returns the results. If all tests are true, MultiOp executes t op (see item 2 below), otherwise
 * it executes f op (see item 3 below).
 * 2. A list of database operations called t op. Each operation in the list is either an insert, delete, or
 * lookup operation, and applies to a single database entry. Two different operations in the list may apply
 * to the same or different entries in the database. These operations are executed
 * if guard evaluates to
 * true.
 * 3. A list of database operations called f op. Like t op, but executed if guard evaluates to false.
 *
 * @generated from message etcdserverpb.TxnRequest
 */
type TxnRequest = Message<"etcdserverpb.TxnRequest"> & {
    /**
     * compare is a list of predicates representing a conjunction of terms.
     * If the comparisons succeed, then the success requests will be processed in order,
     * and the response will contain their respective responses in order.
     * If the comparisons fail, then the failure requests will be processed in order,
     * and the response will contain their respective responses in order.
     *
     * @generated from field: repeated etcdserverpb.Compare compare = 1;
     */
    compare: Compare[];
    /**
     * success is a list of requests which will be applied when compare evaluates to true.
     *
     * @generated from field: repeated etcdserverpb.RequestOp success = 2;
     */
    success: RequestOp[];
    /**
     * failure is a list of requests which will be applied when compare evaluates to false.
     *
     * @generated from field: repeated etcdserverpb.RequestOp failure = 3;
     */
    failure: RequestOp[];
};
/**
 * Describes the message etcdserverpb.TxnRequest.
 * Use `create(TxnRequestSchema)` to create a new message.
 */
declare const TxnRequestSchema: GenMessage<TxnRequest>;
/**
 * @generated from message etcdserverpb.TxnResponse
 */
type TxnResponse = Message<"etcdserverpb.TxnResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * succeeded is set to true if the compare evaluated to true or false otherwise.
     *
     * @generated from field: bool succeeded = 2;
     */
    succeeded: boolean;
    /**
     * responses is a list of responses corresponding to the results from applying
     * success if succeeded is true or failure if succeeded is false.
     *
     * @generated from field: repeated etcdserverpb.ResponseOp responses = 3;
     */
    responses: ResponseOp[];
};
/**
 * Describes the message etcdserverpb.TxnResponse.
 * Use `create(TxnResponseSchema)` to create a new message.
 */
declare const TxnResponseSchema: GenMessage<TxnResponse>;
/**
 * CompactionRequest compacts the key-value store up to a given revision. All superseded keys
 * with a revision less than the compaction revision will be removed.
 *
 * @generated from message etcdserverpb.CompactionRequest
 */
type CompactionRequest = Message<"etcdserverpb.CompactionRequest"> & {
    /**
     * revision is the key-value store revision for the compaction operation.
     *
     * @generated from field: int64 revision = 1;
     */
    revision: bigint;
    /**
     * physical is set so the RPC will wait until the compaction is physically
     * applied to the local database such that compacted entries are totally
     * removed from the backend database.
     *
     * @generated from field: bool physical = 2;
     */
    physical: boolean;
};
/**
 * Describes the message etcdserverpb.CompactionRequest.
 * Use `create(CompactionRequestSchema)` to create a new message.
 */
declare const CompactionRequestSchema: GenMessage<CompactionRequest>;
/**
 * @generated from message etcdserverpb.CompactionResponse
 */
type CompactionResponse = Message<"etcdserverpb.CompactionResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.CompactionResponse.
 * Use `create(CompactionResponseSchema)` to create a new message.
 */
declare const CompactionResponseSchema: GenMessage<CompactionResponse>;
/**
 * @generated from message etcdserverpb.HashRequest
 */
type HashRequest = Message<"etcdserverpb.HashRequest"> & {};
/**
 * Describes the message etcdserverpb.HashRequest.
 * Use `create(HashRequestSchema)` to create a new message.
 */
declare const HashRequestSchema: GenMessage<HashRequest>;
/**
 * @generated from message etcdserverpb.HashKVRequest
 */
type HashKVRequest = Message<"etcdserverpb.HashKVRequest"> & {
    /**
     * revision is the key-value store revision for the hash operation.
     *
     * @generated from field: int64 revision = 1;
     */
    revision: bigint;
};
/**
 * Describes the message etcdserverpb.HashKVRequest.
 * Use `create(HashKVRequestSchema)` to create a new message.
 */
declare const HashKVRequestSchema: GenMessage<HashKVRequest>;
/**
 * @generated from message etcdserverpb.HashKVResponse
 */
type HashKVResponse = Message<"etcdserverpb.HashKVResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * hash is the hash value computed from the responding member's MVCC keys up to a given revision.
     *
     * @generated from field: uint32 hash = 2;
     */
    hash: number;
    /**
     * compact_revision is the compacted revision of key-value store when hash begins.
     *
     * @generated from field: int64 compact_revision = 3;
     */
    compactRevision: bigint;
    /**
     * hash_revision is the revision up to which the hash is calculated.
     *
     * @generated from field: int64 hash_revision = 4;
     */
    hashRevision: bigint;
};
/**
 * Describes the message etcdserverpb.HashKVResponse.
 * Use `create(HashKVResponseSchema)` to create a new message.
 */
declare const HashKVResponseSchema: GenMessage<HashKVResponse>;
/**
 * @generated from message etcdserverpb.HashResponse
 */
type HashResponse = Message<"etcdserverpb.HashResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * hash is the hash value computed from the responding member's KV's backend.
     *
     * @generated from field: uint32 hash = 2;
     */
    hash: number;
};
/**
 * Describes the message etcdserverpb.HashResponse.
 * Use `create(HashResponseSchema)` to create a new message.
 */
declare const HashResponseSchema: GenMessage<HashResponse>;
/**
 * @generated from message etcdserverpb.SnapshotRequest
 */
type SnapshotRequest = Message<"etcdserverpb.SnapshotRequest"> & {};
/**
 * Describes the message etcdserverpb.SnapshotRequest.
 * Use `create(SnapshotRequestSchema)` to create a new message.
 */
declare const SnapshotRequestSchema: GenMessage<SnapshotRequest>;
/**
 * @generated from message etcdserverpb.SnapshotResponse
 */
type SnapshotResponse = Message<"etcdserverpb.SnapshotResponse"> & {
    /**
     * header has the current key-value store information. The first header in the snapshot
     * stream indicates the point in time of the snapshot.
     *
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * remaining_bytes is the number of blob bytes to be sent after this message
     *
     * @generated from field: uint64 remaining_bytes = 2;
     */
    remainingBytes: bigint;
    /**
     * blob contains the next chunk of the snapshot in the snapshot stream.
     *
     * @generated from field: bytes blob = 3;
     */
    blob: Uint8Array;
    /**
     * local version of server that created the snapshot.
     * In cluster with binaries with different version, each cluster can return different result.
     * Informs which etcd server version should be used when restoring the snapshot.
     *
     * @generated from field: string version = 4;
     */
    version: string;
};
/**
 * Describes the message etcdserverpb.SnapshotResponse.
 * Use `create(SnapshotResponseSchema)` to create a new message.
 */
declare const SnapshotResponseSchema: GenMessage<SnapshotResponse>;
/**
 * @generated from message etcdserverpb.WatchRequest
 */
type WatchRequest = Message<"etcdserverpb.WatchRequest"> & {
    /**
     * request_union is a request to either create a new watcher or cancel an existing watcher.
     *
     * @generated from oneof etcdserverpb.WatchRequest.request_union
     */
    requestUnion: {
        /**
         * @generated from field: etcdserverpb.WatchCreateRequest create_request = 1;
         */
        value: WatchCreateRequest;
        case: "createRequest";
    } | {
        /**
         * @generated from field: etcdserverpb.WatchCancelRequest cancel_request = 2;
         */
        value: WatchCancelRequest;
        case: "cancelRequest";
    } | {
        /**
         * @generated from field: etcdserverpb.WatchProgressRequest progress_request = 3;
         */
        value: WatchProgressRequest;
        case: "progressRequest";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message etcdserverpb.WatchRequest.
 * Use `create(WatchRequestSchema)` to create a new message.
 */
declare const WatchRequestSchema: GenMessage<WatchRequest>;
/**
 * @generated from message etcdserverpb.WatchCreateRequest
 */
type WatchCreateRequest = Message<"etcdserverpb.WatchCreateRequest"> & {
    /**
     * key is the key to register for watching.
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * range_end is the end of the range [key, range_end) to watch. If range_end is not given,
     * only the key argument is watched. If range_end is equal to '\0', all keys greater than
     * or equal to the key argument are watched.
     * If the range_end is one bit larger than the given key,
     * then all keys with the prefix (the given key) will be watched.
     *
     * @generated from field: bytes range_end = 2;
     */
    rangeEnd: Uint8Array;
    /**
     * start_revision is an optional revision to watch from (inclusive). No start_revision is "now".
     *
     * @generated from field: int64 start_revision = 3;
     */
    startRevision: bigint;
    /**
     * progress_notify is set so that the etcd server will periodically send a WatchResponse with
     * no events to the new watcher if there are no recent events. It is useful when clients
     * wish to recover a disconnected watcher starting from a recent known revision.
     * The etcd server may decide how often it will send notifications based on current load.
     *
     * @generated from field: bool progress_notify = 4;
     */
    progressNotify: boolean;
    /**
     * filters filter the events at server side before it sends back to the watcher.
     *
     * @generated from field: repeated etcdserverpb.WatchCreateRequest.FilterType filters = 5;
     */
    filters: WatchCreateRequest_FilterType[];
    /**
     * If prev_kv is set, created watcher gets the previous KV before the event happens.
     * If the previous KV is already compacted, nothing will be returned.
     *
     * @generated from field: bool prev_kv = 6;
     */
    prevKv: boolean;
    /**
     * If watch_id is provided and non-zero, it will be assigned to this watcher.
     * Since creating a watcher in etcd is not a synchronous operation,
     * this can be used ensure that ordering is correct when creating multiple
     * watchers on the same stream. Creating a watcher with an ID already in
     * use on the stream will cause an error to be returned.
     *
     * @generated from field: int64 watch_id = 7;
     */
    watchId: bigint;
    /**
     * fragment enables splitting large revisions into multiple watch responses.
     *
     * @generated from field: bool fragment = 8;
     */
    fragment: boolean;
};
/**
 * Describes the message etcdserverpb.WatchCreateRequest.
 * Use `create(WatchCreateRequestSchema)` to create a new message.
 */
declare const WatchCreateRequestSchema: GenMessage<WatchCreateRequest>;
/**
 * @generated from enum etcdserverpb.WatchCreateRequest.FilterType
 */
declare enum WatchCreateRequest_FilterType {
    /**
     * filter out put event.
     *
     * @generated from enum value: NOPUT = 0;
     */
    NOPUT = 0,
    /**
     * filter out delete event.
     *
     * @generated from enum value: NODELETE = 1;
     */
    NODELETE = 1
}
/**
 * Describes the enum etcdserverpb.WatchCreateRequest.FilterType.
 */
declare const WatchCreateRequest_FilterTypeSchema: GenEnum<WatchCreateRequest_FilterType>;
/**
 * @generated from message etcdserverpb.WatchCancelRequest
 */
type WatchCancelRequest = Message<"etcdserverpb.WatchCancelRequest"> & {
    /**
     * watch_id is the watcher id to cancel so that no more events are transmitted.
     *
     * @generated from field: int64 watch_id = 1;
     */
    watchId: bigint;
};
/**
 * Describes the message etcdserverpb.WatchCancelRequest.
 * Use `create(WatchCancelRequestSchema)` to create a new message.
 */
declare const WatchCancelRequestSchema: GenMessage<WatchCancelRequest>;
/**
 * Requests the a watch stream progress status be sent in the watch response stream as soon as
 * possible.
 *
 * @generated from message etcdserverpb.WatchProgressRequest
 */
type WatchProgressRequest = Message<"etcdserverpb.WatchProgressRequest"> & {};
/**
 * Describes the message etcdserverpb.WatchProgressRequest.
 * Use `create(WatchProgressRequestSchema)` to create a new message.
 */
declare const WatchProgressRequestSchema: GenMessage<WatchProgressRequest>;
/**
 * @generated from message etcdserverpb.WatchResponse
 */
type WatchResponse = Message<"etcdserverpb.WatchResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * watch_id is the ID of the watcher that corresponds to the response.
     *
     * @generated from field: int64 watch_id = 2;
     */
    watchId: bigint;
    /**
     * created is set to true if the response is for a create watch request.
     * The client should record the watch_id and expect to receive events for
     * the created watcher from the same stream.
     * All events sent to the created watcher will attach with the same watch_id.
     *
     * @generated from field: bool created = 3;
     */
    created: boolean;
    /**
     * canceled is set to true if the response is for a cancel watch request
     * or if the start_revision has already been compacted.
     * No further events will be sent to the canceled watcher.
     *
     * @generated from field: bool canceled = 4;
     */
    canceled: boolean;
    /**
     * compact_revision is set to the minimum index if a watcher tries to watch
     * at a compacted index.
     *
     * This happens when creating a watcher at a compacted revision or the watcher cannot
     * catch up with the progress of the key-value store.
     *
     * The client should treat the watcher as canceled and should not try to create any
     * watcher with the same start_revision again.
     *
     * @generated from field: int64 compact_revision = 5;
     */
    compactRevision: bigint;
    /**
     * cancel_reason indicates the reason for canceling the watcher.
     *
     * @generated from field: string cancel_reason = 6;
     */
    cancelReason: string;
    /**
     * framgment is true if large watch response was split over multiple responses.
     *
     * @generated from field: bool fragment = 7;
     */
    fragment: boolean;
    /**
     * @generated from field: repeated mvccpb.Event events = 11;
     */
    events: Event[];
};
/**
 * Describes the message etcdserverpb.WatchResponse.
 * Use `create(WatchResponseSchema)` to create a new message.
 */
declare const WatchResponseSchema: GenMessage<WatchResponse>;
/**
 * @generated from message etcdserverpb.LeaseGrantRequest
 */
type LeaseGrantRequest = Message<"etcdserverpb.LeaseGrantRequest"> & {
    /**
     * TTL is the advisory time-to-live in seconds. Expired lease will return -1.
     *
     * @generated from field: int64 TTL = 1;
     */
    TTL: bigint;
    /**
     * ID is the requested ID for the lease. If ID is set to 0, the lessor chooses an ID.
     *
     * @generated from field: int64 ID = 2;
     */
    ID: bigint;
};
/**
 * Describes the message etcdserverpb.LeaseGrantRequest.
 * Use `create(LeaseGrantRequestSchema)` to create a new message.
 */
declare const LeaseGrantRequestSchema: GenMessage<LeaseGrantRequest>;
/**
 * @generated from message etcdserverpb.LeaseGrantResponse
 */
type LeaseGrantResponse = Message<"etcdserverpb.LeaseGrantResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * ID is the lease ID for the granted lease.
     *
     * @generated from field: int64 ID = 2;
     */
    ID: bigint;
    /**
     * TTL is the server chosen lease time-to-live in seconds.
     *
     * @generated from field: int64 TTL = 3;
     */
    TTL: bigint;
    /**
     * @generated from field: string error = 4;
     */
    error: string;
};
/**
 * Describes the message etcdserverpb.LeaseGrantResponse.
 * Use `create(LeaseGrantResponseSchema)` to create a new message.
 */
declare const LeaseGrantResponseSchema: GenMessage<LeaseGrantResponse>;
/**
 * @generated from message etcdserverpb.LeaseRevokeRequest
 */
type LeaseRevokeRequest = Message<"etcdserverpb.LeaseRevokeRequest"> & {
    /**
     * ID is the lease ID to revoke. When the ID is revoked, all associated keys will be deleted.
     *
     * @generated from field: int64 ID = 1;
     */
    ID: bigint;
};
/**
 * Describes the message etcdserverpb.LeaseRevokeRequest.
 * Use `create(LeaseRevokeRequestSchema)` to create a new message.
 */
declare const LeaseRevokeRequestSchema: GenMessage<LeaseRevokeRequest>;
/**
 * @generated from message etcdserverpb.LeaseRevokeResponse
 */
type LeaseRevokeResponse = Message<"etcdserverpb.LeaseRevokeResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.LeaseRevokeResponse.
 * Use `create(LeaseRevokeResponseSchema)` to create a new message.
 */
declare const LeaseRevokeResponseSchema: GenMessage<LeaseRevokeResponse>;
/**
 * @generated from message etcdserverpb.LeaseCheckpoint
 */
type LeaseCheckpoint = Message<"etcdserverpb.LeaseCheckpoint"> & {
    /**
     * ID is the lease ID to checkpoint.
     *
     * @generated from field: int64 ID = 1;
     */
    ID: bigint;
    /**
     * Remaining_TTL is the remaining time until expiry of the lease.
     *
     * @generated from field: int64 remaining_TTL = 2;
     */
    remainingTTL: bigint;
};
/**
 * Describes the message etcdserverpb.LeaseCheckpoint.
 * Use `create(LeaseCheckpointSchema)` to create a new message.
 */
declare const LeaseCheckpointSchema: GenMessage<LeaseCheckpoint>;
/**
 * @generated from message etcdserverpb.LeaseCheckpointRequest
 */
type LeaseCheckpointRequest = Message<"etcdserverpb.LeaseCheckpointRequest"> & {
    /**
     * @generated from field: repeated etcdserverpb.LeaseCheckpoint checkpoints = 1;
     */
    checkpoints: LeaseCheckpoint[];
};
/**
 * Describes the message etcdserverpb.LeaseCheckpointRequest.
 * Use `create(LeaseCheckpointRequestSchema)` to create a new message.
 */
declare const LeaseCheckpointRequestSchema: GenMessage<LeaseCheckpointRequest>;
/**
 * @generated from message etcdserverpb.LeaseCheckpointResponse
 */
type LeaseCheckpointResponse = Message<"etcdserverpb.LeaseCheckpointResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.LeaseCheckpointResponse.
 * Use `create(LeaseCheckpointResponseSchema)` to create a new message.
 */
declare const LeaseCheckpointResponseSchema: GenMessage<LeaseCheckpointResponse>;
/**
 * @generated from message etcdserverpb.LeaseKeepAliveRequest
 */
type LeaseKeepAliveRequest = Message<"etcdserverpb.LeaseKeepAliveRequest"> & {
    /**
     * ID is the lease ID for the lease to keep alive.
     *
     * @generated from field: int64 ID = 1;
     */
    ID: bigint;
};
/**
 * Describes the message etcdserverpb.LeaseKeepAliveRequest.
 * Use `create(LeaseKeepAliveRequestSchema)` to create a new message.
 */
declare const LeaseKeepAliveRequestSchema: GenMessage<LeaseKeepAliveRequest>;
/**
 * @generated from message etcdserverpb.LeaseKeepAliveResponse
 */
type LeaseKeepAliveResponse = Message<"etcdserverpb.LeaseKeepAliveResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * ID is the lease ID from the keep alive request.
     *
     * @generated from field: int64 ID = 2;
     */
    ID: bigint;
    /**
     * TTL is the new time-to-live for the lease.
     *
     * @generated from field: int64 TTL = 3;
     */
    TTL: bigint;
};
/**
 * Describes the message etcdserverpb.LeaseKeepAliveResponse.
 * Use `create(LeaseKeepAliveResponseSchema)` to create a new message.
 */
declare const LeaseKeepAliveResponseSchema: GenMessage<LeaseKeepAliveResponse>;
/**
 * @generated from message etcdserverpb.LeaseTimeToLiveRequest
 */
type LeaseTimeToLiveRequest = Message<"etcdserverpb.LeaseTimeToLiveRequest"> & {
    /**
     * ID is the lease ID for the lease.
     *
     * @generated from field: int64 ID = 1;
     */
    ID: bigint;
    /**
     * keys is true to query all the keys attached to this lease.
     *
     * @generated from field: bool keys = 2;
     */
    keys: boolean;
};
/**
 * Describes the message etcdserverpb.LeaseTimeToLiveRequest.
 * Use `create(LeaseTimeToLiveRequestSchema)` to create a new message.
 */
declare const LeaseTimeToLiveRequestSchema: GenMessage<LeaseTimeToLiveRequest>;
/**
 * @generated from message etcdserverpb.LeaseTimeToLiveResponse
 */
type LeaseTimeToLiveResponse = Message<"etcdserverpb.LeaseTimeToLiveResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * ID is the lease ID from the keep alive request.
     *
     * @generated from field: int64 ID = 2;
     */
    ID: bigint;
    /**
     * TTL is the remaining TTL in seconds for the lease; the lease will expire in under TTL+1 seconds.
     *
     * @generated from field: int64 TTL = 3;
     */
    TTL: bigint;
    /**
     * GrantedTTL is the initial granted time in seconds upon lease creation/renewal.
     *
     * @generated from field: int64 grantedTTL = 4;
     */
    grantedTTL: bigint;
    /**
     * Keys is the list of keys attached to this lease.
     *
     * @generated from field: repeated bytes keys = 5;
     */
    keys: Uint8Array[];
};
/**
 * Describes the message etcdserverpb.LeaseTimeToLiveResponse.
 * Use `create(LeaseTimeToLiveResponseSchema)` to create a new message.
 */
declare const LeaseTimeToLiveResponseSchema: GenMessage<LeaseTimeToLiveResponse>;
/**
 * @generated from message etcdserverpb.LeaseLeasesRequest
 */
type LeaseLeasesRequest = Message<"etcdserverpb.LeaseLeasesRequest"> & {};
/**
 * Describes the message etcdserverpb.LeaseLeasesRequest.
 * Use `create(LeaseLeasesRequestSchema)` to create a new message.
 */
declare const LeaseLeasesRequestSchema: GenMessage<LeaseLeasesRequest>;
/**
 * @generated from message etcdserverpb.LeaseStatus
 */
type LeaseStatus = Message<"etcdserverpb.LeaseStatus"> & {
    /**
     * TODO: int64 TTL = 2;
     *
     * @generated from field: int64 ID = 1;
     */
    ID: bigint;
};
/**
 * Describes the message etcdserverpb.LeaseStatus.
 * Use `create(LeaseStatusSchema)` to create a new message.
 */
declare const LeaseStatusSchema: GenMessage<LeaseStatus>;
/**
 * @generated from message etcdserverpb.LeaseLeasesResponse
 */
type LeaseLeasesResponse = Message<"etcdserverpb.LeaseLeasesResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * @generated from field: repeated etcdserverpb.LeaseStatus leases = 2;
     */
    leases: LeaseStatus[];
};
/**
 * Describes the message etcdserverpb.LeaseLeasesResponse.
 * Use `create(LeaseLeasesResponseSchema)` to create a new message.
 */
declare const LeaseLeasesResponseSchema: GenMessage<LeaseLeasesResponse>;
/**
 * @generated from message etcdserverpb.Member
 */
type Member = Message<"etcdserverpb.Member"> & {
    /**
     * ID is the member ID for this member.
     *
     * @generated from field: uint64 ID = 1;
     */
    ID: bigint;
    /**
     * name is the human-readable name of the member. If the member is not started, the name will be an empty string.
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * peerURLs is the list of URLs the member exposes to the cluster for communication.
     *
     * @generated from field: repeated string peerURLs = 3;
     */
    peerURLs: string[];
    /**
     * clientURLs is the list of URLs the member exposes to clients for communication. If the member is not started, clientURLs will be empty.
     *
     * @generated from field: repeated string clientURLs = 4;
     */
    clientURLs: string[];
    /**
     * isLearner indicates if the member is raft learner.
     *
     * @generated from field: bool isLearner = 5;
     */
    isLearner: boolean;
};
/**
 * Describes the message etcdserverpb.Member.
 * Use `create(MemberSchema)` to create a new message.
 */
declare const MemberSchema: GenMessage<Member>;
/**
 * @generated from message etcdserverpb.MemberAddRequest
 */
type MemberAddRequest = Message<"etcdserverpb.MemberAddRequest"> & {
    /**
     * peerURLs is the list of URLs the added member will use to communicate with the cluster.
     *
     * @generated from field: repeated string peerURLs = 1;
     */
    peerURLs: string[];
    /**
     * isLearner indicates if the added member is raft learner.
     *
     * @generated from field: bool isLearner = 2;
     */
    isLearner: boolean;
};
/**
 * Describes the message etcdserverpb.MemberAddRequest.
 * Use `create(MemberAddRequestSchema)` to create a new message.
 */
declare const MemberAddRequestSchema: GenMessage<MemberAddRequest>;
/**
 * @generated from message etcdserverpb.MemberAddResponse
 */
type MemberAddResponse = Message<"etcdserverpb.MemberAddResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * member is the member information for the added member.
     *
     * @generated from field: etcdserverpb.Member member = 2;
     */
    member?: Member;
    /**
     * members is a list of all members after adding the new member.
     *
     * @generated from field: repeated etcdserverpb.Member members = 3;
     */
    members: Member[];
};
/**
 * Describes the message etcdserverpb.MemberAddResponse.
 * Use `create(MemberAddResponseSchema)` to create a new message.
 */
declare const MemberAddResponseSchema: GenMessage<MemberAddResponse>;
/**
 * @generated from message etcdserverpb.MemberRemoveRequest
 */
type MemberRemoveRequest = Message<"etcdserverpb.MemberRemoveRequest"> & {
    /**
     * ID is the member ID of the member to remove.
     *
     * @generated from field: uint64 ID = 1;
     */
    ID: bigint;
};
/**
 * Describes the message etcdserverpb.MemberRemoveRequest.
 * Use `create(MemberRemoveRequestSchema)` to create a new message.
 */
declare const MemberRemoveRequestSchema: GenMessage<MemberRemoveRequest>;
/**
 * @generated from message etcdserverpb.MemberRemoveResponse
 */
type MemberRemoveResponse = Message<"etcdserverpb.MemberRemoveResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * members is a list of all members after removing the member.
     *
     * @generated from field: repeated etcdserverpb.Member members = 2;
     */
    members: Member[];
};
/**
 * Describes the message etcdserverpb.MemberRemoveResponse.
 * Use `create(MemberRemoveResponseSchema)` to create a new message.
 */
declare const MemberRemoveResponseSchema: GenMessage<MemberRemoveResponse>;
/**
 * @generated from message etcdserverpb.MemberUpdateRequest
 */
type MemberUpdateRequest = Message<"etcdserverpb.MemberUpdateRequest"> & {
    /**
     * ID is the member ID of the member to update.
     *
     * @generated from field: uint64 ID = 1;
     */
    ID: bigint;
    /**
     * peerURLs is the new list of URLs the member will use to communicate with the cluster.
     *
     * @generated from field: repeated string peerURLs = 2;
     */
    peerURLs: string[];
};
/**
 * Describes the message etcdserverpb.MemberUpdateRequest.
 * Use `create(MemberUpdateRequestSchema)` to create a new message.
 */
declare const MemberUpdateRequestSchema: GenMessage<MemberUpdateRequest>;
/**
 * @generated from message etcdserverpb.MemberUpdateResponse
 */
type MemberUpdateResponse = Message<"etcdserverpb.MemberUpdateResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * members is a list of all members after updating the member.
     *
     * @generated from field: repeated etcdserverpb.Member members = 2;
     */
    members: Member[];
};
/**
 * Describes the message etcdserverpb.MemberUpdateResponse.
 * Use `create(MemberUpdateResponseSchema)` to create a new message.
 */
declare const MemberUpdateResponseSchema: GenMessage<MemberUpdateResponse>;
/**
 * @generated from message etcdserverpb.MemberListRequest
 */
type MemberListRequest = Message<"etcdserverpb.MemberListRequest"> & {
    /**
     * @generated from field: bool linearizable = 1;
     */
    linearizable: boolean;
};
/**
 * Describes the message etcdserverpb.MemberListRequest.
 * Use `create(MemberListRequestSchema)` to create a new message.
 */
declare const MemberListRequestSchema: GenMessage<MemberListRequest>;
/**
 * @generated from message etcdserverpb.MemberListResponse
 */
type MemberListResponse = Message<"etcdserverpb.MemberListResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * members is a list of all members associated with the cluster.
     *
     * @generated from field: repeated etcdserverpb.Member members = 2;
     */
    members: Member[];
};
/**
 * Describes the message etcdserverpb.MemberListResponse.
 * Use `create(MemberListResponseSchema)` to create a new message.
 */
declare const MemberListResponseSchema: GenMessage<MemberListResponse>;
/**
 * @generated from message etcdserverpb.MemberPromoteRequest
 */
type MemberPromoteRequest = Message<"etcdserverpb.MemberPromoteRequest"> & {
    /**
     * ID is the member ID of the member to promote.
     *
     * @generated from field: uint64 ID = 1;
     */
    ID: bigint;
};
/**
 * Describes the message etcdserverpb.MemberPromoteRequest.
 * Use `create(MemberPromoteRequestSchema)` to create a new message.
 */
declare const MemberPromoteRequestSchema: GenMessage<MemberPromoteRequest>;
/**
 * @generated from message etcdserverpb.MemberPromoteResponse
 */
type MemberPromoteResponse = Message<"etcdserverpb.MemberPromoteResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * members is a list of all members after promoting the member.
     *
     * @generated from field: repeated etcdserverpb.Member members = 2;
     */
    members: Member[];
};
/**
 * Describes the message etcdserverpb.MemberPromoteResponse.
 * Use `create(MemberPromoteResponseSchema)` to create a new message.
 */
declare const MemberPromoteResponseSchema: GenMessage<MemberPromoteResponse>;
/**
 * @generated from message etcdserverpb.DefragmentRequest
 */
type DefragmentRequest = Message<"etcdserverpb.DefragmentRequest"> & {};
/**
 * Describes the message etcdserverpb.DefragmentRequest.
 * Use `create(DefragmentRequestSchema)` to create a new message.
 */
declare const DefragmentRequestSchema: GenMessage<DefragmentRequest>;
/**
 * @generated from message etcdserverpb.DefragmentResponse
 */
type DefragmentResponse = Message<"etcdserverpb.DefragmentResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.DefragmentResponse.
 * Use `create(DefragmentResponseSchema)` to create a new message.
 */
declare const DefragmentResponseSchema: GenMessage<DefragmentResponse>;
/**
 * @generated from message etcdserverpb.MoveLeaderRequest
 */
type MoveLeaderRequest = Message<"etcdserverpb.MoveLeaderRequest"> & {
    /**
     * targetID is the node ID for the new leader.
     *
     * @generated from field: uint64 targetID = 1;
     */
    targetID: bigint;
};
/**
 * Describes the message etcdserverpb.MoveLeaderRequest.
 * Use `create(MoveLeaderRequestSchema)` to create a new message.
 */
declare const MoveLeaderRequestSchema: GenMessage<MoveLeaderRequest>;
/**
 * @generated from message etcdserverpb.MoveLeaderResponse
 */
type MoveLeaderResponse = Message<"etcdserverpb.MoveLeaderResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.MoveLeaderResponse.
 * Use `create(MoveLeaderResponseSchema)` to create a new message.
 */
declare const MoveLeaderResponseSchema: GenMessage<MoveLeaderResponse>;
/**
 * @generated from message etcdserverpb.AlarmRequest
 */
type AlarmRequest = Message<"etcdserverpb.AlarmRequest"> & {
    /**
     * action is the kind of alarm request to issue. The action
     * may GET alarm statuses, ACTIVATE an alarm, or DEACTIVATE a
     * raised alarm.
     *
     * @generated from field: etcdserverpb.AlarmRequest.AlarmAction action = 1;
     */
    action: AlarmRequest_AlarmAction;
    /**
     * memberID is the ID of the member associated with the alarm. If memberID is 0, the
     * alarm request covers all members.
     *
     * @generated from field: uint64 memberID = 2;
     */
    memberID: bigint;
    /**
     * alarm is the type of alarm to consider for this request.
     *
     * @generated from field: etcdserverpb.AlarmType alarm = 3;
     */
    alarm: AlarmType;
};
/**
 * Describes the message etcdserverpb.AlarmRequest.
 * Use `create(AlarmRequestSchema)` to create a new message.
 */
declare const AlarmRequestSchema: GenMessage<AlarmRequest>;
/**
 * @generated from enum etcdserverpb.AlarmRequest.AlarmAction
 */
declare enum AlarmRequest_AlarmAction {
    /**
     * @generated from enum value: GET = 0;
     */
    GET = 0,
    /**
     * @generated from enum value: ACTIVATE = 1;
     */
    ACTIVATE = 1,
    /**
     * @generated from enum value: DEACTIVATE = 2;
     */
    DEACTIVATE = 2
}
/**
 * Describes the enum etcdserverpb.AlarmRequest.AlarmAction.
 */
declare const AlarmRequest_AlarmActionSchema: GenEnum<AlarmRequest_AlarmAction>;
/**
 * @generated from message etcdserverpb.AlarmMember
 */
type AlarmMember = Message<"etcdserverpb.AlarmMember"> & {
    /**
     * memberID is the ID of the member associated with the raised alarm.
     *
     * @generated from field: uint64 memberID = 1;
     */
    memberID: bigint;
    /**
     * alarm is the type of alarm which has been raised.
     *
     * @generated from field: etcdserverpb.AlarmType alarm = 2;
     */
    alarm: AlarmType;
};
/**
 * Describes the message etcdserverpb.AlarmMember.
 * Use `create(AlarmMemberSchema)` to create a new message.
 */
declare const AlarmMemberSchema: GenMessage<AlarmMember>;
/**
 * @generated from message etcdserverpb.AlarmResponse
 */
type AlarmResponse = Message<"etcdserverpb.AlarmResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * alarms is a list of alarms associated with the alarm request.
     *
     * @generated from field: repeated etcdserverpb.AlarmMember alarms = 2;
     */
    alarms: AlarmMember[];
};
/**
 * Describes the message etcdserverpb.AlarmResponse.
 * Use `create(AlarmResponseSchema)` to create a new message.
 */
declare const AlarmResponseSchema: GenMessage<AlarmResponse>;
/**
 * @generated from message etcdserverpb.DowngradeRequest
 */
type DowngradeRequest = Message<"etcdserverpb.DowngradeRequest"> & {
    /**
     * action is the kind of downgrade request to issue. The action may
     * VALIDATE the target version, DOWNGRADE the cluster version,
     * or CANCEL the current downgrading job.
     *
     * @generated from field: etcdserverpb.DowngradeRequest.DowngradeAction action = 1;
     */
    action: DowngradeRequest_DowngradeAction;
    /**
     * version is the target version to downgrade.
     *
     * @generated from field: string version = 2;
     */
    version: string;
};
/**
 * Describes the message etcdserverpb.DowngradeRequest.
 * Use `create(DowngradeRequestSchema)` to create a new message.
 */
declare const DowngradeRequestSchema: GenMessage<DowngradeRequest>;
/**
 * @generated from enum etcdserverpb.DowngradeRequest.DowngradeAction
 */
declare enum DowngradeRequest_DowngradeAction {
    /**
     * @generated from enum value: VALIDATE = 0;
     */
    VALIDATE = 0,
    /**
     * @generated from enum value: ENABLE = 1;
     */
    ENABLE = 1,
    /**
     * @generated from enum value: CANCEL = 2;
     */
    CANCEL = 2
}
/**
 * Describes the enum etcdserverpb.DowngradeRequest.DowngradeAction.
 */
declare const DowngradeRequest_DowngradeActionSchema: GenEnum<DowngradeRequest_DowngradeAction>;
/**
 * @generated from message etcdserverpb.DowngradeResponse
 */
type DowngradeResponse = Message<"etcdserverpb.DowngradeResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * version is the current cluster version.
     *
     * @generated from field: string version = 2;
     */
    version: string;
};
/**
 * Describes the message etcdserverpb.DowngradeResponse.
 * Use `create(DowngradeResponseSchema)` to create a new message.
 */
declare const DowngradeResponseSchema: GenMessage<DowngradeResponse>;
/**
 * DowngradeVersionTestRequest is used for test only. The version in
 * this request will be read as the WAL record version.If the downgrade
 * target version is less than this version, then the downgrade(online)
 * or migration(offline) isn't safe, so shouldn't be allowed.
 *
 * @generated from message etcdserverpb.DowngradeVersionTestRequest
 */
type DowngradeVersionTestRequest = Message<"etcdserverpb.DowngradeVersionTestRequest"> & {
    /**
     * @generated from field: string ver = 1;
     */
    ver: string;
};
/**
 * Describes the message etcdserverpb.DowngradeVersionTestRequest.
 * Use `create(DowngradeVersionTestRequestSchema)` to create a new message.
 */
declare const DowngradeVersionTestRequestSchema: GenMessage<DowngradeVersionTestRequest>;
/**
 * @generated from message etcdserverpb.StatusRequest
 */
type StatusRequest = Message<"etcdserverpb.StatusRequest"> & {};
/**
 * Describes the message etcdserverpb.StatusRequest.
 * Use `create(StatusRequestSchema)` to create a new message.
 */
declare const StatusRequestSchema: GenMessage<StatusRequest>;
/**
 * @generated from message etcdserverpb.StatusResponse
 */
type StatusResponse = Message<"etcdserverpb.StatusResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * version is the cluster protocol version used by the responding member.
     *
     * @generated from field: string version = 2;
     */
    version: string;
    /**
     * dbSize is the size of the backend database physically allocated, in bytes, of the responding member.
     *
     * @generated from field: int64 dbSize = 3;
     */
    dbSize: bigint;
    /**
     * leader is the member ID which the responding member believes is the current leader.
     *
     * @generated from field: uint64 leader = 4;
     */
    leader: bigint;
    /**
     * raftIndex is the current raft committed index of the responding member.
     *
     * @generated from field: uint64 raftIndex = 5;
     */
    raftIndex: bigint;
    /**
     * raftTerm is the current raft term of the responding member.
     *
     * @generated from field: uint64 raftTerm = 6;
     */
    raftTerm: bigint;
    /**
     * raftAppliedIndex is the current raft applied index of the responding member.
     *
     * @generated from field: uint64 raftAppliedIndex = 7;
     */
    raftAppliedIndex: bigint;
    /**
     * errors contains alarm/health information and status.
     *
     * @generated from field: repeated string errors = 8;
     */
    errors: string[];
    /**
     * dbSizeInUse is the size of the backend database logically in use, in bytes, of the responding member.
     *
     * @generated from field: int64 dbSizeInUse = 9;
     */
    dbSizeInUse: bigint;
    /**
     * isLearner indicates if the member is raft learner.
     *
     * @generated from field: bool isLearner = 10;
     */
    isLearner: boolean;
    /**
     * storageVersion is the version of the db file. It might be updated with delay in relationship to the target cluster version.
     *
     * @generated from field: string storageVersion = 11;
     */
    storageVersion: string;
    /**
     * dbSizeQuota is the configured etcd storage quota in bytes (the value passed to etcd instance by flag --quota-backend-bytes)
     *
     * @generated from field: int64 dbSizeQuota = 12;
     */
    dbSizeQuota: bigint;
    /**
     * downgradeInfo indicates if there is downgrade process.
     *
     * @generated from field: etcdserverpb.DowngradeInfo downgradeInfo = 13;
     */
    downgradeInfo?: DowngradeInfo;
};
/**
 * Describes the message etcdserverpb.StatusResponse.
 * Use `create(StatusResponseSchema)` to create a new message.
 */
declare const StatusResponseSchema: GenMessage<StatusResponse>;
/**
 * @generated from message etcdserverpb.DowngradeInfo
 */
type DowngradeInfo = Message<"etcdserverpb.DowngradeInfo"> & {
    /**
     * enabled indicates whether the cluster is enabled to downgrade.
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * targetVersion is the target downgrade version.
     *
     * @generated from field: string targetVersion = 2;
     */
    targetVersion: string;
};
/**
 * Describes the message etcdserverpb.DowngradeInfo.
 * Use `create(DowngradeInfoSchema)` to create a new message.
 */
declare const DowngradeInfoSchema: GenMessage<DowngradeInfo>;
/**
 * @generated from message etcdserverpb.AuthEnableRequest
 */
type AuthEnableRequest = Message<"etcdserverpb.AuthEnableRequest"> & {};
/**
 * Describes the message etcdserverpb.AuthEnableRequest.
 * Use `create(AuthEnableRequestSchema)` to create a new message.
 */
declare const AuthEnableRequestSchema: GenMessage<AuthEnableRequest>;
/**
 * @generated from message etcdserverpb.AuthDisableRequest
 */
type AuthDisableRequest = Message<"etcdserverpb.AuthDisableRequest"> & {};
/**
 * Describes the message etcdserverpb.AuthDisableRequest.
 * Use `create(AuthDisableRequestSchema)` to create a new message.
 */
declare const AuthDisableRequestSchema: GenMessage<AuthDisableRequest>;
/**
 * @generated from message etcdserverpb.AuthStatusRequest
 */
type AuthStatusRequest = Message<"etcdserverpb.AuthStatusRequest"> & {};
/**
 * Describes the message etcdserverpb.AuthStatusRequest.
 * Use `create(AuthStatusRequestSchema)` to create a new message.
 */
declare const AuthStatusRequestSchema: GenMessage<AuthStatusRequest>;
/**
 * @generated from message etcdserverpb.AuthenticateRequest
 */
type AuthenticateRequest = Message<"etcdserverpb.AuthenticateRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string password = 2;
     */
    password: string;
};
/**
 * Describes the message etcdserverpb.AuthenticateRequest.
 * Use `create(AuthenticateRequestSchema)` to create a new message.
 */
declare const AuthenticateRequestSchema: GenMessage<AuthenticateRequest>;
/**
 * @generated from message etcdserverpb.AuthUserAddRequest
 */
type AuthUserAddRequest = Message<"etcdserverpb.AuthUserAddRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string password = 2;
     */
    password: string;
    /**
     * @generated from field: authpb.UserAddOptions options = 3;
     */
    options?: UserAddOptions;
    /**
     * @generated from field: string hashedPassword = 4;
     */
    hashedPassword: string;
};
/**
 * Describes the message etcdserverpb.AuthUserAddRequest.
 * Use `create(AuthUserAddRequestSchema)` to create a new message.
 */
declare const AuthUserAddRequestSchema: GenMessage<AuthUserAddRequest>;
/**
 * @generated from message etcdserverpb.AuthUserGetRequest
 */
type AuthUserGetRequest = Message<"etcdserverpb.AuthUserGetRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message etcdserverpb.AuthUserGetRequest.
 * Use `create(AuthUserGetRequestSchema)` to create a new message.
 */
declare const AuthUserGetRequestSchema: GenMessage<AuthUserGetRequest>;
/**
 * @generated from message etcdserverpb.AuthUserDeleteRequest
 */
type AuthUserDeleteRequest = Message<"etcdserverpb.AuthUserDeleteRequest"> & {
    /**
     * name is the name of the user to delete.
     *
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message etcdserverpb.AuthUserDeleteRequest.
 * Use `create(AuthUserDeleteRequestSchema)` to create a new message.
 */
declare const AuthUserDeleteRequestSchema: GenMessage<AuthUserDeleteRequest>;
/**
 * @generated from message etcdserverpb.AuthUserChangePasswordRequest
 */
type AuthUserChangePasswordRequest = Message<"etcdserverpb.AuthUserChangePasswordRequest"> & {
    /**
     * name is the name of the user whose password is being changed.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * password is the new password for the user. Note that this field will be removed in the API layer.
     *
     * @generated from field: string password = 2;
     */
    password: string;
    /**
     * hashedPassword is the new password for the user. Note that this field will be initialized in the API layer.
     *
     * @generated from field: string hashedPassword = 3;
     */
    hashedPassword: string;
};
/**
 * Describes the message etcdserverpb.AuthUserChangePasswordRequest.
 * Use `create(AuthUserChangePasswordRequestSchema)` to create a new message.
 */
declare const AuthUserChangePasswordRequestSchema: GenMessage<AuthUserChangePasswordRequest>;
/**
 * @generated from message etcdserverpb.AuthUserGrantRoleRequest
 */
type AuthUserGrantRoleRequest = Message<"etcdserverpb.AuthUserGrantRoleRequest"> & {
    /**
     * user is the name of the user which should be granted a given role.
     *
     * @generated from field: string user = 1;
     */
    user: string;
    /**
     * role is the name of the role to grant to the user.
     *
     * @generated from field: string role = 2;
     */
    role: string;
};
/**
 * Describes the message etcdserverpb.AuthUserGrantRoleRequest.
 * Use `create(AuthUserGrantRoleRequestSchema)` to create a new message.
 */
declare const AuthUserGrantRoleRequestSchema: GenMessage<AuthUserGrantRoleRequest>;
/**
 * @generated from message etcdserverpb.AuthUserRevokeRoleRequest
 */
type AuthUserRevokeRoleRequest = Message<"etcdserverpb.AuthUserRevokeRoleRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string role = 2;
     */
    role: string;
};
/**
 * Describes the message etcdserverpb.AuthUserRevokeRoleRequest.
 * Use `create(AuthUserRevokeRoleRequestSchema)` to create a new message.
 */
declare const AuthUserRevokeRoleRequestSchema: GenMessage<AuthUserRevokeRoleRequest>;
/**
 * @generated from message etcdserverpb.AuthRoleAddRequest
 */
type AuthRoleAddRequest = Message<"etcdserverpb.AuthRoleAddRequest"> & {
    /**
     * name is the name of the role to add to the authentication system.
     *
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message etcdserverpb.AuthRoleAddRequest.
 * Use `create(AuthRoleAddRequestSchema)` to create a new message.
 */
declare const AuthRoleAddRequestSchema: GenMessage<AuthRoleAddRequest>;
/**
 * @generated from message etcdserverpb.AuthRoleGetRequest
 */
type AuthRoleGetRequest = Message<"etcdserverpb.AuthRoleGetRequest"> & {
    /**
     * @generated from field: string role = 1;
     */
    role: string;
};
/**
 * Describes the message etcdserverpb.AuthRoleGetRequest.
 * Use `create(AuthRoleGetRequestSchema)` to create a new message.
 */
declare const AuthRoleGetRequestSchema: GenMessage<AuthRoleGetRequest>;
/**
 * @generated from message etcdserverpb.AuthUserListRequest
 */
type AuthUserListRequest = Message<"etcdserverpb.AuthUserListRequest"> & {};
/**
 * Describes the message etcdserverpb.AuthUserListRequest.
 * Use `create(AuthUserListRequestSchema)` to create a new message.
 */
declare const AuthUserListRequestSchema: GenMessage<AuthUserListRequest>;
/**
 * @generated from message etcdserverpb.AuthRoleListRequest
 */
type AuthRoleListRequest = Message<"etcdserverpb.AuthRoleListRequest"> & {};
/**
 * Describes the message etcdserverpb.AuthRoleListRequest.
 * Use `create(AuthRoleListRequestSchema)` to create a new message.
 */
declare const AuthRoleListRequestSchema: GenMessage<AuthRoleListRequest>;
/**
 * @generated from message etcdserverpb.AuthRoleDeleteRequest
 */
type AuthRoleDeleteRequest = Message<"etcdserverpb.AuthRoleDeleteRequest"> & {
    /**
     * @generated from field: string role = 1;
     */
    role: string;
};
/**
 * Describes the message etcdserverpb.AuthRoleDeleteRequest.
 * Use `create(AuthRoleDeleteRequestSchema)` to create a new message.
 */
declare const AuthRoleDeleteRequestSchema: GenMessage<AuthRoleDeleteRequest>;
/**
 * @generated from message etcdserverpb.AuthRoleGrantPermissionRequest
 */
type AuthRoleGrantPermissionRequest = Message<"etcdserverpb.AuthRoleGrantPermissionRequest"> & {
    /**
     * name is the name of the role which will be granted the permission.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * perm is the permission to grant to the role.
     *
     * @generated from field: authpb.Permission perm = 2;
     */
    perm?: Permission;
};
/**
 * Describes the message etcdserverpb.AuthRoleGrantPermissionRequest.
 * Use `create(AuthRoleGrantPermissionRequestSchema)` to create a new message.
 */
declare const AuthRoleGrantPermissionRequestSchema: GenMessage<AuthRoleGrantPermissionRequest>;
/**
 * @generated from message etcdserverpb.AuthRoleRevokePermissionRequest
 */
type AuthRoleRevokePermissionRequest = Message<"etcdserverpb.AuthRoleRevokePermissionRequest"> & {
    /**
     * @generated from field: string role = 1;
     */
    role: string;
    /**
     * @generated from field: bytes key = 2;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes range_end = 3;
     */
    rangeEnd: Uint8Array;
};
/**
 * Describes the message etcdserverpb.AuthRoleRevokePermissionRequest.
 * Use `create(AuthRoleRevokePermissionRequestSchema)` to create a new message.
 */
declare const AuthRoleRevokePermissionRequestSchema: GenMessage<AuthRoleRevokePermissionRequest>;
/**
 * @generated from message etcdserverpb.AuthEnableResponse
 */
type AuthEnableResponse = Message<"etcdserverpb.AuthEnableResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthEnableResponse.
 * Use `create(AuthEnableResponseSchema)` to create a new message.
 */
declare const AuthEnableResponseSchema: GenMessage<AuthEnableResponse>;
/**
 * @generated from message etcdserverpb.AuthDisableResponse
 */
type AuthDisableResponse = Message<"etcdserverpb.AuthDisableResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthDisableResponse.
 * Use `create(AuthDisableResponseSchema)` to create a new message.
 */
declare const AuthDisableResponseSchema: GenMessage<AuthDisableResponse>;
/**
 * @generated from message etcdserverpb.AuthStatusResponse
 */
type AuthStatusResponse = Message<"etcdserverpb.AuthStatusResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * @generated from field: bool enabled = 2;
     */
    enabled: boolean;
    /**
     * authRevision is the current revision of auth store
     *
     * @generated from field: uint64 authRevision = 3;
     */
    authRevision: bigint;
};
/**
 * Describes the message etcdserverpb.AuthStatusResponse.
 * Use `create(AuthStatusResponseSchema)` to create a new message.
 */
declare const AuthStatusResponseSchema: GenMessage<AuthStatusResponse>;
/**
 * @generated from message etcdserverpb.AuthenticateResponse
 */
type AuthenticateResponse = Message<"etcdserverpb.AuthenticateResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * token is an authorized token that can be used in succeeding RPCs
     *
     * @generated from field: string token = 2;
     */
    token: string;
};
/**
 * Describes the message etcdserverpb.AuthenticateResponse.
 * Use `create(AuthenticateResponseSchema)` to create a new message.
 */
declare const AuthenticateResponseSchema: GenMessage<AuthenticateResponse>;
/**
 * @generated from message etcdserverpb.AuthUserAddResponse
 */
type AuthUserAddResponse = Message<"etcdserverpb.AuthUserAddResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthUserAddResponse.
 * Use `create(AuthUserAddResponseSchema)` to create a new message.
 */
declare const AuthUserAddResponseSchema: GenMessage<AuthUserAddResponse>;
/**
 * @generated from message etcdserverpb.AuthUserGetResponse
 */
type AuthUserGetResponse = Message<"etcdserverpb.AuthUserGetResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * @generated from field: repeated string roles = 2;
     */
    roles: string[];
};
/**
 * Describes the message etcdserverpb.AuthUserGetResponse.
 * Use `create(AuthUserGetResponseSchema)` to create a new message.
 */
declare const AuthUserGetResponseSchema: GenMessage<AuthUserGetResponse>;
/**
 * @generated from message etcdserverpb.AuthUserDeleteResponse
 */
type AuthUserDeleteResponse = Message<"etcdserverpb.AuthUserDeleteResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthUserDeleteResponse.
 * Use `create(AuthUserDeleteResponseSchema)` to create a new message.
 */
declare const AuthUserDeleteResponseSchema: GenMessage<AuthUserDeleteResponse>;
/**
 * @generated from message etcdserverpb.AuthUserChangePasswordResponse
 */
type AuthUserChangePasswordResponse = Message<"etcdserverpb.AuthUserChangePasswordResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthUserChangePasswordResponse.
 * Use `create(AuthUserChangePasswordResponseSchema)` to create a new message.
 */
declare const AuthUserChangePasswordResponseSchema: GenMessage<AuthUserChangePasswordResponse>;
/**
 * @generated from message etcdserverpb.AuthUserGrantRoleResponse
 */
type AuthUserGrantRoleResponse = Message<"etcdserverpb.AuthUserGrantRoleResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthUserGrantRoleResponse.
 * Use `create(AuthUserGrantRoleResponseSchema)` to create a new message.
 */
declare const AuthUserGrantRoleResponseSchema: GenMessage<AuthUserGrantRoleResponse>;
/**
 * @generated from message etcdserverpb.AuthUserRevokeRoleResponse
 */
type AuthUserRevokeRoleResponse = Message<"etcdserverpb.AuthUserRevokeRoleResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthUserRevokeRoleResponse.
 * Use `create(AuthUserRevokeRoleResponseSchema)` to create a new message.
 */
declare const AuthUserRevokeRoleResponseSchema: GenMessage<AuthUserRevokeRoleResponse>;
/**
 * @generated from message etcdserverpb.AuthRoleAddResponse
 */
type AuthRoleAddResponse = Message<"etcdserverpb.AuthRoleAddResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthRoleAddResponse.
 * Use `create(AuthRoleAddResponseSchema)` to create a new message.
 */
declare const AuthRoleAddResponseSchema: GenMessage<AuthRoleAddResponse>;
/**
 * @generated from message etcdserverpb.AuthRoleGetResponse
 */
type AuthRoleGetResponse = Message<"etcdserverpb.AuthRoleGetResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * @generated from field: repeated authpb.Permission perm = 2;
     */
    perm: Permission[];
};
/**
 * Describes the message etcdserverpb.AuthRoleGetResponse.
 * Use `create(AuthRoleGetResponseSchema)` to create a new message.
 */
declare const AuthRoleGetResponseSchema: GenMessage<AuthRoleGetResponse>;
/**
 * @generated from message etcdserverpb.AuthRoleListResponse
 */
type AuthRoleListResponse = Message<"etcdserverpb.AuthRoleListResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * @generated from field: repeated string roles = 2;
     */
    roles: string[];
};
/**
 * Describes the message etcdserverpb.AuthRoleListResponse.
 * Use `create(AuthRoleListResponseSchema)` to create a new message.
 */
declare const AuthRoleListResponseSchema: GenMessage<AuthRoleListResponse>;
/**
 * @generated from message etcdserverpb.AuthUserListResponse
 */
type AuthUserListResponse = Message<"etcdserverpb.AuthUserListResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
    /**
     * @generated from field: repeated string users = 2;
     */
    users: string[];
};
/**
 * Describes the message etcdserverpb.AuthUserListResponse.
 * Use `create(AuthUserListResponseSchema)` to create a new message.
 */
declare const AuthUserListResponseSchema: GenMessage<AuthUserListResponse>;
/**
 * @generated from message etcdserverpb.AuthRoleDeleteResponse
 */
type AuthRoleDeleteResponse = Message<"etcdserverpb.AuthRoleDeleteResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthRoleDeleteResponse.
 * Use `create(AuthRoleDeleteResponseSchema)` to create a new message.
 */
declare const AuthRoleDeleteResponseSchema: GenMessage<AuthRoleDeleteResponse>;
/**
 * @generated from message etcdserverpb.AuthRoleGrantPermissionResponse
 */
type AuthRoleGrantPermissionResponse = Message<"etcdserverpb.AuthRoleGrantPermissionResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthRoleGrantPermissionResponse.
 * Use `create(AuthRoleGrantPermissionResponseSchema)` to create a new message.
 */
declare const AuthRoleGrantPermissionResponseSchema: GenMessage<AuthRoleGrantPermissionResponse>;
/**
 * @generated from message etcdserverpb.AuthRoleRevokePermissionResponse
 */
type AuthRoleRevokePermissionResponse = Message<"etcdserverpb.AuthRoleRevokePermissionResponse"> & {
    /**
     * @generated from field: etcdserverpb.ResponseHeader header = 1;
     */
    header?: ResponseHeader;
};
/**
 * Describes the message etcdserverpb.AuthRoleRevokePermissionResponse.
 * Use `create(AuthRoleRevokePermissionResponseSchema)` to create a new message.
 */
declare const AuthRoleRevokePermissionResponseSchema: GenMessage<AuthRoleRevokePermissionResponse>;
/**
 * @generated from enum etcdserverpb.AlarmType
 */
declare enum AlarmType {
    /**
     * default, used to query if any alarm is active
     *
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * space quota is exhausted
     *
     * @generated from enum value: NOSPACE = 1;
     */
    NOSPACE = 1,
    /**
     * kv store corruption detected
     *
     * @generated from enum value: CORRUPT = 2;
     */
    CORRUPT = 2
}
/**
 * Describes the enum etcdserverpb.AlarmType.
 */
declare const AlarmTypeSchema: GenEnum<AlarmType>;
/**
 * @generated from service etcdserverpb.KV
 */
declare const KV: GenService<{
    /**
     * Range gets the keys in the range from the key-value store.
     *
     * @generated from rpc etcdserverpb.KV.Range
     */
    range: {
        methodKind: "unary";
        input: typeof RangeRequestSchema;
        output: typeof RangeResponseSchema;
    };
    /**
     * Put puts the given key into the key-value store.
     * A put request increments the revision of the key-value store
     * and generates one event in the event history.
     *
     * @generated from rpc etcdserverpb.KV.Put
     */
    put: {
        methodKind: "unary";
        input: typeof PutRequestSchema;
        output: typeof PutResponseSchema;
    };
    /**
     * DeleteRange deletes the given range from the key-value store.
     * A delete request increments the revision of the key-value store
     * and generates a delete event in the event history for every deleted key.
     *
     * @generated from rpc etcdserverpb.KV.DeleteRange
     */
    deleteRange: {
        methodKind: "unary";
        input: typeof DeleteRangeRequestSchema;
        output: typeof DeleteRangeResponseSchema;
    };
    /**
     * Txn processes multiple requests in a single transaction.
     * A txn request increments the revision of the key-value store
     * and generates events with the same revision for every completed request.
     * It is not allowed to modify the same key several times within one txn.
     *
     * @generated from rpc etcdserverpb.KV.Txn
     */
    txn: {
        methodKind: "unary";
        input: typeof TxnRequestSchema;
        output: typeof TxnResponseSchema;
    };
    /**
     * Compact compacts the event history in the etcd key-value store. The key-value
     * store should be periodically compacted or the event history will continue to grow
     * indefinitely.
     *
     * @generated from rpc etcdserverpb.KV.Compact
     */
    compact: {
        methodKind: "unary";
        input: typeof CompactionRequestSchema;
        output: typeof CompactionResponseSchema;
    };
}>;
/**
 * @generated from service etcdserverpb.Watch
 */
declare const Watch: GenService<{
    /**
     * Watch watches for events happening or that have happened. Both input and output
     * are streams; the input stream is for creating and canceling watchers and the output
     * stream sends events. One watch RPC can watch on multiple key ranges, streaming events
     * for several watches at once. The entire event history can be watched starting from the
     * last compaction revision.
     *
     * @generated from rpc etcdserverpb.Watch.Watch
     */
    watch: {
        methodKind: "bidi_streaming";
        input: typeof WatchRequestSchema;
        output: typeof WatchResponseSchema;
    };
}>;
/**
 * @generated from service etcdserverpb.Lease
 */
declare const Lease: GenService<{
    /**
     * LeaseGrant creates a lease which expires if the server does not receive a keepAlive
     * within a given time to live period. All keys attached to the lease will be expired and
     * deleted if the lease expires. Each expired key generates a delete event in the event history.
     *
     * @generated from rpc etcdserverpb.Lease.LeaseGrant
     */
    leaseGrant: {
        methodKind: "unary";
        input: typeof LeaseGrantRequestSchema;
        output: typeof LeaseGrantResponseSchema;
    };
    /**
     * LeaseRevoke revokes a lease. All keys attached to the lease will expire and be deleted.
     *
     * @generated from rpc etcdserverpb.Lease.LeaseRevoke
     */
    leaseRevoke: {
        methodKind: "unary";
        input: typeof LeaseRevokeRequestSchema;
        output: typeof LeaseRevokeResponseSchema;
    };
    /**
     * LeaseKeepAlive keeps the lease alive by streaming keep alive requests from the client
     * to the server and streaming keep alive responses from the server to the client.
     *
     * @generated from rpc etcdserverpb.Lease.LeaseKeepAlive
     */
    leaseKeepAlive: {
        methodKind: "bidi_streaming";
        input: typeof LeaseKeepAliveRequestSchema;
        output: typeof LeaseKeepAliveResponseSchema;
    };
    /**
     * LeaseTimeToLive retrieves lease information.
     *
     * @generated from rpc etcdserverpb.Lease.LeaseTimeToLive
     */
    leaseTimeToLive: {
        methodKind: "unary";
        input: typeof LeaseTimeToLiveRequestSchema;
        output: typeof LeaseTimeToLiveResponseSchema;
    };
    /**
     * LeaseLeases lists all existing leases.
     *
     * @generated from rpc etcdserverpb.Lease.LeaseLeases
     */
    leaseLeases: {
        methodKind: "unary";
        input: typeof LeaseLeasesRequestSchema;
        output: typeof LeaseLeasesResponseSchema;
    };
}>;
/**
 * @generated from service etcdserverpb.Cluster
 */
declare const Cluster: GenService<{
    /**
     * MemberAdd adds a member into the cluster.
     *
     * @generated from rpc etcdserverpb.Cluster.MemberAdd
     */
    memberAdd: {
        methodKind: "unary";
        input: typeof MemberAddRequestSchema;
        output: typeof MemberAddResponseSchema;
    };
    /**
     * MemberRemove removes an existing member from the cluster.
     *
     * @generated from rpc etcdserverpb.Cluster.MemberRemove
     */
    memberRemove: {
        methodKind: "unary";
        input: typeof MemberRemoveRequestSchema;
        output: typeof MemberRemoveResponseSchema;
    };
    /**
     * MemberUpdate updates the member configuration.
     *
     * @generated from rpc etcdserverpb.Cluster.MemberUpdate
     */
    memberUpdate: {
        methodKind: "unary";
        input: typeof MemberUpdateRequestSchema;
        output: typeof MemberUpdateResponseSchema;
    };
    /**
     * MemberList lists all the members in the cluster.
     *
     * @generated from rpc etcdserverpb.Cluster.MemberList
     */
    memberList: {
        methodKind: "unary";
        input: typeof MemberListRequestSchema;
        output: typeof MemberListResponseSchema;
    };
    /**
     * MemberPromote promotes a member from raft learner (non-voting) to raft voting member.
     *
     * @generated from rpc etcdserverpb.Cluster.MemberPromote
     */
    memberPromote: {
        methodKind: "unary";
        input: typeof MemberPromoteRequestSchema;
        output: typeof MemberPromoteResponseSchema;
    };
}>;
/**
 * @generated from service etcdserverpb.Maintenance
 */
declare const Maintenance: GenService<{
    /**
     * Alarm activates, deactivates, and queries alarms regarding cluster health.
     *
     * @generated from rpc etcdserverpb.Maintenance.Alarm
     */
    alarm: {
        methodKind: "unary";
        input: typeof AlarmRequestSchema;
        output: typeof AlarmResponseSchema;
    };
    /**
     * Status gets the status of the member.
     *
     * @generated from rpc etcdserverpb.Maintenance.Status
     */
    status: {
        methodKind: "unary";
        input: typeof StatusRequestSchema;
        output: typeof StatusResponseSchema;
    };
    /**
     * Defragment defragments a member's backend database to recover storage space.
     *
     * @generated from rpc etcdserverpb.Maintenance.Defragment
     */
    defragment: {
        methodKind: "unary";
        input: typeof DefragmentRequestSchema;
        output: typeof DefragmentResponseSchema;
    };
    /**
     * Hash computes the hash of whole backend keyspace,
     * including key, lease, and other buckets in storage.
     * This is designed for testing ONLY!
     * Do not rely on this in production with ongoing transactions,
     * since Hash operation does not hold MVCC locks.
     * Use "HashKV" API instead for "key" bucket consistency checks.
     *
     * @generated from rpc etcdserverpb.Maintenance.Hash
     */
    hash: {
        methodKind: "unary";
        input: typeof HashRequestSchema;
        output: typeof HashResponseSchema;
    };
    /**
     * HashKV computes the hash of all MVCC keys up to a given revision.
     * It only iterates "key" bucket in backend storage.
     *
     * @generated from rpc etcdserverpb.Maintenance.HashKV
     */
    hashKV: {
        methodKind: "unary";
        input: typeof HashKVRequestSchema;
        output: typeof HashKVResponseSchema;
    };
    /**
     * Snapshot sends a snapshot of the entire backend from a member over a stream to a client.
     *
     * @generated from rpc etcdserverpb.Maintenance.Snapshot
     */
    snapshot: {
        methodKind: "server_streaming";
        input: typeof SnapshotRequestSchema;
        output: typeof SnapshotResponseSchema;
    };
    /**
     * MoveLeader requests current leader node to transfer its leadership to transferee.
     *
     * @generated from rpc etcdserverpb.Maintenance.MoveLeader
     */
    moveLeader: {
        methodKind: "unary";
        input: typeof MoveLeaderRequestSchema;
        output: typeof MoveLeaderResponseSchema;
    };
    /**
     * Downgrade requests downgrades, verifies feasibility or cancels downgrade
     * on the cluster version.
     * Supported since etcd 3.5.
     *
     * @generated from rpc etcdserverpb.Maintenance.Downgrade
     */
    downgrade: {
        methodKind: "unary";
        input: typeof DowngradeRequestSchema;
        output: typeof DowngradeResponseSchema;
    };
}>;
/**
 * @generated from service etcdserverpb.Auth
 */
declare const Auth: GenService<{
    /**
     * AuthEnable enables authentication.
     *
     * @generated from rpc etcdserverpb.Auth.AuthEnable
     */
    authEnable: {
        methodKind: "unary";
        input: typeof AuthEnableRequestSchema;
        output: typeof AuthEnableResponseSchema;
    };
    /**
     * AuthDisable disables authentication.
     *
     * @generated from rpc etcdserverpb.Auth.AuthDisable
     */
    authDisable: {
        methodKind: "unary";
        input: typeof AuthDisableRequestSchema;
        output: typeof AuthDisableResponseSchema;
    };
    /**
     * AuthStatus displays authentication status.
     *
     * @generated from rpc etcdserverpb.Auth.AuthStatus
     */
    authStatus: {
        methodKind: "unary";
        input: typeof AuthStatusRequestSchema;
        output: typeof AuthStatusResponseSchema;
    };
    /**
     * Authenticate processes an authenticate request.
     *
     * @generated from rpc etcdserverpb.Auth.Authenticate
     */
    authenticate: {
        methodKind: "unary";
        input: typeof AuthenticateRequestSchema;
        output: typeof AuthenticateResponseSchema;
    };
    /**
     * UserAdd adds a new user. User name cannot be empty.
     *
     * @generated from rpc etcdserverpb.Auth.UserAdd
     */
    userAdd: {
        methodKind: "unary";
        input: typeof AuthUserAddRequestSchema;
        output: typeof AuthUserAddResponseSchema;
    };
    /**
     * UserGet gets detailed user information.
     *
     * @generated from rpc etcdserverpb.Auth.UserGet
     */
    userGet: {
        methodKind: "unary";
        input: typeof AuthUserGetRequestSchema;
        output: typeof AuthUserGetResponseSchema;
    };
    /**
     * UserList gets a list of all users.
     *
     * @generated from rpc etcdserverpb.Auth.UserList
     */
    userList: {
        methodKind: "unary";
        input: typeof AuthUserListRequestSchema;
        output: typeof AuthUserListResponseSchema;
    };
    /**
     * UserDelete deletes a specified user.
     *
     * @generated from rpc etcdserverpb.Auth.UserDelete
     */
    userDelete: {
        methodKind: "unary";
        input: typeof AuthUserDeleteRequestSchema;
        output: typeof AuthUserDeleteResponseSchema;
    };
    /**
     * UserChangePassword changes the password of a specified user.
     *
     * @generated from rpc etcdserverpb.Auth.UserChangePassword
     */
    userChangePassword: {
        methodKind: "unary";
        input: typeof AuthUserChangePasswordRequestSchema;
        output: typeof AuthUserChangePasswordResponseSchema;
    };
    /**
     * UserGrant grants a role to a specified user.
     *
     * @generated from rpc etcdserverpb.Auth.UserGrantRole
     */
    userGrantRole: {
        methodKind: "unary";
        input: typeof AuthUserGrantRoleRequestSchema;
        output: typeof AuthUserGrantRoleResponseSchema;
    };
    /**
     * UserRevokeRole revokes a role of specified user.
     *
     * @generated from rpc etcdserverpb.Auth.UserRevokeRole
     */
    userRevokeRole: {
        methodKind: "unary";
        input: typeof AuthUserRevokeRoleRequestSchema;
        output: typeof AuthUserRevokeRoleResponseSchema;
    };
    /**
     * RoleAdd adds a new role. Role name cannot be empty.
     *
     * @generated from rpc etcdserverpb.Auth.RoleAdd
     */
    roleAdd: {
        methodKind: "unary";
        input: typeof AuthRoleAddRequestSchema;
        output: typeof AuthRoleAddResponseSchema;
    };
    /**
     * RoleGet gets detailed role information.
     *
     * @generated from rpc etcdserverpb.Auth.RoleGet
     */
    roleGet: {
        methodKind: "unary";
        input: typeof AuthRoleGetRequestSchema;
        output: typeof AuthRoleGetResponseSchema;
    };
    /**
     * RoleList gets lists of all roles.
     *
     * @generated from rpc etcdserverpb.Auth.RoleList
     */
    roleList: {
        methodKind: "unary";
        input: typeof AuthRoleListRequestSchema;
        output: typeof AuthRoleListResponseSchema;
    };
    /**
     * RoleDelete deletes a specified role.
     *
     * @generated from rpc etcdserverpb.Auth.RoleDelete
     */
    roleDelete: {
        methodKind: "unary";
        input: typeof AuthRoleDeleteRequestSchema;
        output: typeof AuthRoleDeleteResponseSchema;
    };
    /**
     * RoleGrantPermission grants a permission of a specified key or range to a specified role.
     *
     * @generated from rpc etcdserverpb.Auth.RoleGrantPermission
     */
    roleGrantPermission: {
        methodKind: "unary";
        input: typeof AuthRoleGrantPermissionRequestSchema;
        output: typeof AuthRoleGrantPermissionResponseSchema;
    };
    /**
     * RoleRevokePermission revokes a key or range permission of a specified role.
     *
     * @generated from rpc etcdserverpb.Auth.RoleRevokePermission
     */
    roleRevokePermission: {
        methodKind: "unary";
        input: typeof AuthRoleRevokePermissionRequestSchema;
        output: typeof AuthRoleRevokePermissionResponseSchema;
    };
}>;

/**
 * Describes the file etcd/api/versionpb/version.proto.
 */
declare const file_etcd_api_versionpb_version: GenFile;
/**
 * @generated from extension: optional string etcd_version_msg = 50000;
 */
declare const etcd_version_msg: GenExtension<MessageOptions, string>;
/**
 * @generated from extension: optional string etcd_version_field = 50001;
 */
declare const etcd_version_field: GenExtension<FieldOptions, string>;
/**
 * @generated from extension: optional string etcd_version_enum = 50002;
 */
declare const etcd_version_enum: GenExtension<EnumOptions, string>;
/**
 * @generated from extension: optional string etcd_version_enum_value = 50003;
 */
declare const etcd_version_enum_value: GenExtension<EnumValueOptions, string>;

export { type AlarmMember, AlarmMemberSchema, type AlarmRequest, AlarmRequestSchema, AlarmRequest_AlarmAction, AlarmRequest_AlarmActionSchema, type AlarmResponse, AlarmResponseSchema, AlarmType, AlarmTypeSchema, Auth, type AuthDisableRequest, AuthDisableRequestSchema, type AuthDisableResponse, AuthDisableResponseSchema, type AuthEnableRequest, AuthEnableRequestSchema, type AuthEnableResponse, AuthEnableResponseSchema, type AuthRoleAddRequest, AuthRoleAddRequestSchema, type AuthRoleAddResponse, AuthRoleAddResponseSchema, type AuthRoleDeleteRequest, AuthRoleDeleteRequestSchema, type AuthRoleDeleteResponse, AuthRoleDeleteResponseSchema, type AuthRoleGetRequest, AuthRoleGetRequestSchema, type AuthRoleGetResponse, AuthRoleGetResponseSchema, type AuthRoleGrantPermissionRequest, AuthRoleGrantPermissionRequestSchema, type AuthRoleGrantPermissionResponse, AuthRoleGrantPermissionResponseSchema, type AuthRoleListRequest, AuthRoleListRequestSchema, type AuthRoleListResponse, AuthRoleListResponseSchema, type AuthRoleRevokePermissionRequest, AuthRoleRevokePermissionRequestSchema, type AuthRoleRevokePermissionResponse, AuthRoleRevokePermissionResponseSchema, type AuthStatusRequest, AuthStatusRequestSchema, type AuthStatusResponse, AuthStatusResponseSchema, type AuthUserAddRequest, AuthUserAddRequestSchema, type AuthUserAddResponse, AuthUserAddResponseSchema, type AuthUserChangePasswordRequest, AuthUserChangePasswordRequestSchema, type AuthUserChangePasswordResponse, AuthUserChangePasswordResponseSchema, type AuthUserDeleteRequest, AuthUserDeleteRequestSchema, type AuthUserDeleteResponse, AuthUserDeleteResponseSchema, type AuthUserGetRequest, AuthUserGetRequestSchema, type AuthUserGetResponse, AuthUserGetResponseSchema, type AuthUserGrantRoleRequest, AuthUserGrantRoleRequestSchema, type AuthUserGrantRoleResponse, AuthUserGrantRoleResponseSchema, type AuthUserListRequest, AuthUserListRequestSchema, type AuthUserListResponse, AuthUserListResponseSchema, type AuthUserRevokeRoleRequest, AuthUserRevokeRoleRequestSchema, type AuthUserRevokeRoleResponse, AuthUserRevokeRoleResponseSchema, type AuthenticateRequest, AuthenticateRequestSchema, type AuthenticateResponse, AuthenticateResponseSchema, Cluster, type CompactionRequest, CompactionRequestSchema, type CompactionResponse, CompactionResponseSchema, type Compare, CompareSchema, Compare_CompareResult, Compare_CompareResultSchema, Compare_CompareTarget, Compare_CompareTargetSchema, type DefragmentRequest, DefragmentRequestSchema, type DefragmentResponse, DefragmentResponseSchema, type DeleteRangeRequest, DeleteRangeRequestSchema, type DeleteRangeResponse, DeleteRangeResponseSchema, type DowngradeInfo, DowngradeInfoSchema, type DowngradeRequest, DowngradeRequestSchema, DowngradeRequest_DowngradeAction, DowngradeRequest_DowngradeActionSchema, type DowngradeResponse, DowngradeResponseSchema, type DowngradeVersionTestRequest, DowngradeVersionTestRequestSchema, type Event, EventSchema, Event_EventType, Event_EventTypeSchema, type HashKVRequest, HashKVRequestSchema, type HashKVResponse, HashKVResponseSchema, type HashRequest, HashRequestSchema, type HashResponse, HashResponseSchema, KV, type KeyValue, KeyValueSchema, Lease, type LeaseCheckpoint, type LeaseCheckpointRequest, LeaseCheckpointRequestSchema, type LeaseCheckpointResponse, LeaseCheckpointResponseSchema, LeaseCheckpointSchema, type LeaseGrantRequest, LeaseGrantRequestSchema, type LeaseGrantResponse, LeaseGrantResponseSchema, type LeaseKeepAliveRequest, LeaseKeepAliveRequestSchema, type LeaseKeepAliveResponse, LeaseKeepAliveResponseSchema, type LeaseLeasesRequest, LeaseLeasesRequestSchema, type LeaseLeasesResponse, LeaseLeasesResponseSchema, type LeaseRevokeRequest, LeaseRevokeRequestSchema, type LeaseRevokeResponse, LeaseRevokeResponseSchema, type LeaseStatus, LeaseStatusSchema, type LeaseTimeToLiveRequest, LeaseTimeToLiveRequestSchema, type LeaseTimeToLiveResponse, LeaseTimeToLiveResponseSchema, Maintenance, type Member, type MemberAddRequest, MemberAddRequestSchema, type MemberAddResponse, MemberAddResponseSchema, type MemberListRequest, MemberListRequestSchema, type MemberListResponse, MemberListResponseSchema, type MemberPromoteRequest, MemberPromoteRequestSchema, type MemberPromoteResponse, MemberPromoteResponseSchema, type MemberRemoveRequest, MemberRemoveRequestSchema, type MemberRemoveResponse, MemberRemoveResponseSchema, MemberSchema, type MemberUpdateRequest, MemberUpdateRequestSchema, type MemberUpdateResponse, MemberUpdateResponseSchema, type Metadata, MetadataSchema, type MoveLeaderRequest, MoveLeaderRequestSchema, type MoveLeaderResponse, MoveLeaderResponseSchema, type Permission, PermissionSchema, Permission_Type, Permission_TypeSchema, type PutRequest, PutRequestSchema, type PutResponse, PutResponseSchema, type RangeRequest, RangeRequestSchema, RangeRequest_SortOrder, RangeRequest_SortOrderSchema, RangeRequest_SortTarget, RangeRequest_SortTargetSchema, type RangeResponse, RangeResponseSchema, type Request, type RequestOp, RequestOpSchema, RequestSchema, type ResponseHeader, ResponseHeaderSchema, type ResponseOp, ResponseOpSchema, type Role, RoleSchema, type SnapshotRequest, SnapshotRequestSchema, type SnapshotResponse, SnapshotResponseSchema, type StatusRequest, StatusRequestSchema, type StatusResponse, StatusResponseSchema, type TxnRequest, TxnRequestSchema, type TxnResponse, TxnResponseSchema, type User, type UserAddOptions, UserAddOptionsSchema, UserSchema, Watch, type WatchCancelRequest, WatchCancelRequestSchema, type WatchCreateRequest, WatchCreateRequestSchema, WatchCreateRequest_FilterType, WatchCreateRequest_FilterTypeSchema, type WatchProgressRequest, WatchProgressRequestSchema, type WatchRequest, WatchRequestSchema, type WatchResponse, WatchResponseSchema, etcd_version_enum, etcd_version_enum_value, etcd_version_field, etcd_version_msg, file_etcd_api_authpb_auth, file_etcd_api_etcdserverpb_etcdserver, file_etcd_api_etcdserverpb_rpc, file_etcd_api_mvccpb_kv, file_etcd_api_versionpb_version };
