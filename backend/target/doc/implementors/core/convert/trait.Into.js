(function() {var implementors = {};
implementors["ahash"] = [{"text":"impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;K, V, <a class=\"struct\" href=\"ahash/struct.RandomState.html\" title=\"struct ahash::RandomState\">RandomState</a>&gt;&gt; for <a class=\"struct\" href=\"ahash/struct.AHashMap.html\" title=\"struct ahash::AHashMap\">AHashMap</a>&lt;K, V&gt;","synthetic":false,"types":["ahash::hash_map::AHashMap"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;T, <a class=\"struct\" href=\"ahash/struct.RandomState.html\" title=\"struct ahash::RandomState\">RandomState</a>&gt;&gt; for <a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T&gt;","synthetic":false,"types":["ahash::hash_set::AHashSet"]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, L&gt;&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;","synthetic":false,"types":["either::Either"]}];
implementors["hyper"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"hyper/body/struct.Bytes.html\" title=\"struct hyper::body::Bytes\">Bytes</a>&gt; for <a class=\"struct\" href=\"hyper/ext/struct.ReasonPhrase.html\" title=\"struct hyper::ext::ReasonPhrase\">ReasonPhrase</a>","synthetic":false,"types":["hyper::ext::h1_reason_phrase::ReasonPhrase"]}];
implementors["itertools"] = [{"text":"impl&lt;A, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"itertools/enum.Either.html\" title=\"enum itertools::Either\">Either</a>&lt;A, B&gt;&gt;&gt; for <a class=\"enum\" href=\"itertools/enum.EitherOrBoth.html\" title=\"enum itertools::EitherOrBoth\">EitherOrBoth</a>&lt;A, B&gt;","synthetic":false,"types":["itertools::either_or_both::EitherOrBoth"]}];
implementors["unicase"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/core/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"unicase/struct.UniCase.html\" title=\"struct unicase::UniCase\">UniCase</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/core/primitive.str.html\">str</a>&gt;","synthetic":false,"types":["unicase::UniCase"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"unicase/struct.UniCase.html\" title=\"struct unicase::UniCase\">UniCase</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.64.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;","synthetic":false,"types":["unicase::UniCase"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/core/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"unicase/struct.UniCase.html\" title=\"struct unicase::UniCase\">UniCase</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.64.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/core/primitive.str.html\">str</a>&gt;&gt;","synthetic":false,"types":["unicase::UniCase"]}];
implementors["unicode_bidi"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"unicode_bidi/level/struct.Level.html\" title=\"struct unicode_bidi::level::Level\">Level</a>","synthetic":false,"types":["unicode_bidi::level::Level"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()