(function() {var implementors = {};
implementors["ahash"] = [{"text":"impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"ahash/struct.AHashMap.html\" title=\"struct ahash::AHashMap\">AHashMap</a>&lt;K, V, S&gt;","synthetic":false,"types":["ahash::hash_map::AHashMap"]},{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T, S&gt;","synthetic":false,"types":["ahash::hash_set::AHashSet"]}];
implementors["bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>","synthetic":false,"types":["bytes::bytes_mut::BytesMut"]}];
implementors["crossbeam_utils"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"crossbeam_utils/struct.CachePadded.html\" title=\"struct crossbeam_utils::CachePadded\">CachePadded</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_utils::cache_padded::CachePadded"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"crossbeam_utils/sync/struct.ShardedLockWriteGuard.html\" title=\"struct crossbeam_utils::sync::ShardedLockWriteGuard\">ShardedLockWriteGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["crossbeam_utils::sync::sharded_lock::ShardedLockWriteGuard"]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a>&lt;Target = L::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a>&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["futures_executor"] = [{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"futures_executor/struct.BlockingStream.html\" title=\"struct futures_executor::BlockingStream\">BlockingStream</a>&lt;S&gt;","synthetic":false,"types":["futures_executor::local_pool::BlockingStream"]}];
implementors["futures_intrusive"] = [{"text":"impl&lt;MutexType:&nbsp;<a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"futures_intrusive/sync/struct.GenericMutexGuard.html\" title=\"struct futures_intrusive::sync::GenericMutexGuard\">GenericMutexGuard</a>&lt;'_, MutexType, T&gt;","synthetic":false,"types":["futures_intrusive::sync::mutex::GenericMutexGuard"]}];
implementors["futures_util"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"futures_util/lock/struct.OwnedMutexGuard.html\" title=\"struct futures_util::lock::OwnedMutexGuard\">OwnedMutexGuard</a>&lt;T&gt;","synthetic":false,"types":["futures_util::lock::mutex::OwnedMutexGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"futures_util/lock/struct.MutexGuard.html\" title=\"struct futures_util::lock::MutexGuard\">MutexGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["futures_util::lock::mutex::MutexGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, U:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"futures_util/lock/struct.MappedMutexGuard.html\" title=\"struct futures_util::lock::MappedMutexGuard\">MappedMutexGuard</a>&lt;'_, T, U&gt;","synthetic":false,"types":["futures_util::lock::mutex::MappedMutexGuard"]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["generic_array::GenericArray"]}];
implementors["lock_api"] = [{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"lock_api/struct.MutexGuard.html\" title=\"struct lock_api::MutexGuard\">MutexGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::mutex::MutexGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"lock_api/struct.MappedMutexGuard.html\" title=\"struct lock_api::MappedMutexGuard\">MappedMutexGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::mutex::MappedMutexGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"lock_api/struct.RwLockWriteGuard.html\" title=\"struct lock_api::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::rwlock::RwLockWriteGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"lock_api/struct.MappedRwLockWriteGuard.html\" title=\"struct lock_api::MappedRwLockWriteGuard\">MappedRwLockWriteGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::rwlock::MappedRwLockWriteGuard"]}];
implementors["once_cell"] = [{"text":"impl&lt;T, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"once_cell/unsync/struct.Lazy.html\" title=\"struct once_cell::unsync::Lazy\">Lazy</a>&lt;T, F&gt;","synthetic":false,"types":["once_cell::unsync::Lazy"]},{"text":"impl&lt;T, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"once_cell/sync/struct.Lazy.html\" title=\"struct once_cell::sync::Lazy\">Lazy</a>&lt;T, F&gt;","synthetic":false,"types":["once_cell::sync::Lazy"]}];
implementors["rustls"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"enum\" href=\"rustls/enum.Connection.html\" title=\"enum rustls::Connection\">Connection</a>","synthetic":false,"types":["rustls::conn::Connection"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"rustls/struct.ConnectionCommon.html\" title=\"struct rustls::ConnectionCommon\">ConnectionCommon</a>&lt;T&gt;","synthetic":false,"types":["rustls::conn::ConnectionCommon"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"rustls/client/struct.ClientConnection.html\" title=\"struct rustls::client::ClientConnection\">ClientConnection</a>","synthetic":false,"types":["rustls::client::client_conn::ClientConnection"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"rustls/server/struct.ServerConnection.html\" title=\"struct rustls::server::ServerConnection\">ServerConnection</a>","synthetic":false,"types":["rustls::server::server_conn::ServerConnection"]}];
implementors["scopeguard"] = [{"text":"impl&lt;T, F, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"scopeguard/struct.ScopeGuard.html\" title=\"struct scopeguard::ScopeGuard\">ScopeGuard</a>&lt;T, F, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T),<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"scopeguard/trait.Strategy.html\" title=\"trait scopeguard::Strategy\">Strategy</a>,&nbsp;</span>","synthetic":false,"types":["scopeguard::ScopeGuard"]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;","synthetic":false,"types":["smallvec::SmallVec"]}];
implementors["socket2"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"socket2/struct.MaybeUninitSlice.html\" title=\"struct socket2::MaybeUninitSlice\">MaybeUninitSlice</a>&lt;'a&gt;","synthetic":false,"types":["socket2::MaybeUninitSlice"]}];
implementors["spin"] = [{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"spin/struct.MutexGuard.html\" title=\"struct spin::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;","synthetic":false,"types":["spin::mutex::MutexGuard"]},{"text":"impl&lt;'rwlock, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"spin/struct.RwLockWriteGuard.html\" title=\"struct spin::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T&gt;","synthetic":false,"types":["spin::rw_lock::RwLockWriteGuard"]}];
implementors["sqlx_core"] = [{"text":"impl&lt;DB:&nbsp;<a class=\"trait\" href=\"sqlx_core/database/trait.Database.html\" title=\"trait sqlx_core::database::Database\">Database</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sqlx_core/pool/struct.PoolConnection.html\" title=\"struct sqlx_core::pool::PoolConnection\">PoolConnection</a>&lt;DB&gt;","synthetic":false,"types":["sqlx_core::pool::connection::PoolConnection"]},{"text":"impl&lt;'c, DB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sqlx_core/transaction/struct.Transaction.html\" title=\"struct sqlx_core::transaction::Transaction\">Transaction</a>&lt;'c, DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"sqlx_core/database/trait.Database.html\" title=\"trait sqlx_core::database::Database\">Database</a>,&nbsp;</span>","synthetic":false,"types":["sqlx_core::transaction::Transaction"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sqlx_core/types/struct.Json.html\" title=\"struct sqlx_core::types::Json\">Json</a>&lt;T&gt;","synthetic":false,"types":["sqlx_core::types::json::Json"]},{"text":"impl&lt;'lock, C:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;<a class=\"struct\" href=\"sqlx_core/postgres/struct.PgConnection.html\" title=\"struct sqlx_core::postgres::PgConnection\">PgConnection</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"sqlx_core/postgres/struct.PgConnection.html\" title=\"struct sqlx_core::postgres::PgConnection\">PgConnection</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sqlx_core/postgres/struct.PgAdvisoryLockGuard.html\" title=\"struct sqlx_core::postgres::PgAdvisoryLockGuard\">PgAdvisoryLockGuard</a>&lt;'lock, C&gt;","synthetic":false,"types":["sqlx_core::postgres::advisory_lock::PgAdvisoryLockGuard"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"sqlx_core/postgres/struct.PgArgumentBuffer.html\" title=\"struct sqlx_core::postgres::PgArgumentBuffer\">PgArgumentBuffer</a>","synthetic":false,"types":["sqlx_core::postgres::arguments::PgArgumentBuffer"]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::arrayvec::ArrayVec"]},{"text":"impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt;","synthetic":false,"types":["tinyvec::slicevec::SliceVec"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]}];
implementors["tokio"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"tokio/sync/struct.MutexGuard.html\" title=\"struct tokio::sync::MutexGuard\">MutexGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["tokio::sync::mutex::MutexGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"tokio/sync/struct.OwnedMutexGuard.html\" title=\"struct tokio::sync::OwnedMutexGuard\">OwnedMutexGuard</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::mutex::OwnedMutexGuard"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"tokio/sync/struct.MappedMutexGuard.html\" title=\"struct tokio::sync::MappedMutexGuard\">MappedMutexGuard</a>&lt;'a, T&gt;","synthetic":false,"types":["tokio::sync::mutex::MappedMutexGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, U:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"tokio/sync/struct.OwnedMappedMutexGuard.html\" title=\"struct tokio::sync::OwnedMappedMutexGuard\">OwnedMappedMutexGuard</a>&lt;T, U&gt;","synthetic":false,"types":["tokio::sync::mutex::OwnedMappedMutexGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"tokio/sync/struct.OwnedRwLockWriteGuard.html\" title=\"struct tokio::sync::OwnedRwLockWriteGuard\">OwnedRwLockWriteGuard</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::rwlock::owned_write_guard::OwnedRwLockWriteGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, U:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"tokio/sync/struct.OwnedRwLockMappedWriteGuard.html\" title=\"struct tokio::sync::OwnedRwLockMappedWriteGuard\">OwnedRwLockMappedWriteGuard</a>&lt;T, U&gt;","synthetic":false,"types":["tokio::sync::rwlock::owned_write_guard_mapped::OwnedRwLockMappedWriteGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"tokio/sync/struct.RwLockWriteGuard.html\" title=\"struct tokio::sync::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["tokio::sync::rwlock::write_guard::RwLockWriteGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"tokio/sync/struct.RwLockMappedWriteGuard.html\" title=\"struct tokio::sync::RwLockMappedWriteGuard\">RwLockMappedWriteGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["tokio::sync::rwlock::write_guard_mapped::RwLockMappedWriteGuard"]}];
implementors["try_lock"] = [{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"try_lock/struct.Locked.html\" title=\"struct try_lock::Locked\">Locked</a>&lt;'a, T&gt;","synthetic":false,"types":["try_lock::Locked"]}];
implementors["unicase"] = [{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"unicase/struct.Ascii.html\" title=\"struct unicase::Ascii\">Ascii</a>&lt;S&gt;","synthetic":false,"types":["unicase::Ascii"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"unicase/struct.UniCase.html\" title=\"struct unicase::UniCase\">UniCase</a>&lt;S&gt;","synthetic":false,"types":["unicase::UniCase"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()