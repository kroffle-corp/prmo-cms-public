'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d2c71fe4a3246dc8bbddf4a4b529de9a",
"index.html": "e52b7dae726c4256088d9c37c7269def",
"/": "e52b7dae726c4256088d9c37c7269def",
"main.dart.js": "4aff0f390bb313b31488cfe14f48d3eb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2344ba322a6c6369ae64a00ce780b95d",
".git/config": "ef6a87aa77302724525c88990ae7d616",
".git/objects/95/2836835b71d54239dafca0686684ca918e0a97": "867120adec5f2b5d12b695a06e628ac2",
".git/objects/92/908b3a51c61c91eeba4317aa03db90a80d8726": "1a1d42aa282582d096afe28c25f9f882",
".git/objects/3e/eb45a3171e10c230dd59a3c14ce8b79a5431eb": "88fc4fec83a14f997b16c3ce28c110cf",
".git/objects/50/9366738055990c823972a0b2368a8c26c82b4a": "14239f94a7bc20d7d6498572f53bc0c0",
".git/objects/50/4758412773cc5ba48fc298f71d42a4c2fec6e2": "68873b269886d0e0fbe17c5b09a9c268",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/799384a5d5754e08f35301a96ff3e4bcefee92": "d3b0f334c232a03e1f5f5d2283c77eb8",
".git/objects/3b/031e7ca2bbed401b8c55f3f8cff6cd2100bf4e": "1646a12c498e7f8ad85cb23109d873ea",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/25a8a1b32c7a05fd3e9b4be2897e39d208274c": "183ca5c460b21e05541aad7c2fe077fe",
".git/objects/32/6c54b7df1c888151fa4699e68519c2080fb4ff": "e84d31a9c66cfdbb93bae405b2b25447",
".git/objects/35/2ff482ab8609fb14fa943e9aeedb11fb6d2835": "981a80c21c72ebac10e0038c6b7a208b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/36672aee0a607d8272d474d1405f1118125982": "1fe36ec848b36dca5fc54a62bbf43950",
".git/objects/3c/31a2e17f1db6054849cf44ee8defaf1a0fa4e3": "8d68b3f1d76d550f9f6547a9cba5f1a3",
".git/objects/56/a9c7a71fd9ec3880590d87db7ab4b48f8b4d1e": "5f5c9e41ecf95d1a23628296aec91be4",
".git/objects/56/b934e0c348d986f0f93a63a5ff38d622b04252": "e874f662864b8d7570f0cbc3de16acb8",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/3d/4e4e30e7144fb51346e9786c9855ef331fa949": "41de9435ce0e8ade4dbdfbecca4d1d25",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/34/92fa5e61716c1aa377a2ebe1d0977bd8ad4e35": "894c182c113e58b49e6254f4e5624271",
".git/objects/34/083fee096963fdb62dc91f719da3383e3d9b23": "3e18d50d8a938f0472f350ec683c233c",
".git/objects/9d/e4a9d7a15e8650027af28502c75ba1ae4a4b86": "5d78fdfaa703e8e9dc93d97057a68a3f",
".git/objects/02/7597f1b46c5ecf7bd33b27adeecbf0790fad50": "e24c41abdb051d13869cdaa12359320c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/c66a15832c9729aea774ca31c77b87e377a8c6": "ee4f22a4f0b47c0af72584e014aa1ddf",
".git/objects/ac/93c4136569fd89561cf5ea6ba1b2a7c0d143ad": "4f9c88edba912970130c7325c8cad09c",
".git/objects/ac/2c44135152ca8707a5308b1d815b0d002d30dc": "0422d55bf47ccf361680f5df508be454",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b3/48e90bf68d2e4bedeef0fd3cb3c8edb96df9d0": "dbfab3e1b80c8ca1a7da9b09fe955390",
".git/objects/df/613996b7c06b8064916d1096435088cf8c0ea7": "77237ae001152e8cad77b669d7af279c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/439712315dc6353cb8f85d354ab7ef276d974c": "b4fbe67dd011c70034033b940847ec4e",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/20e4f76a3d334f362db9bafe2755ff12ed4e59": "090bdf03f6fa27bd2b004c585e12e14e",
".git/objects/f4/21c585df9f1bba93f1bf2ded0630d9bfd0a8bf": "d5665e0bcc590e95b559a2721cd46674",
".git/objects/f4/09decee7abfef1766febc4c80b29e219e87385": "62d9e61365c3d9c0d59b5814b9120800",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/1e6e40c4a3035871ba2e1ea5715d825a851f4b": "1f2670de825e3692905341dc9d97f3ce",
".git/objects/c9/f6553f3b18c7fa8a06f4c4b7ed1e27d2603d67": "5e95a372f10e17c47714ad0f49c4c371",
".git/objects/fc/0f831f2163a1fbe80a673879ef38ca99cea9da": "83d4aff84a61067728e7571c438afaa1",
".git/objects/e3/ec840ab953cf6d177a29e2a190c65413500399": "da13945175cc1a12441c045d55909aa3",
".git/objects/fe/c1752242ac7047dc92073b5b843ddd9edd1d9a": "2fdc630a1b1d3af782a08b7e6db09196",
".git/objects/fe/b67402603c2ccd6be991bff0f6b4f603a2d887": "ff2e493ca7fc96e45ac1537b8754e93b",
".git/objects/c8/e9af1d5bdc990663fed2b5338955d36d714942": "71c3f02323676490452a48172f9ac415",
".git/objects/ed/bdc6651747b7e6986e928b11a1339be43b4a75": "c7a8a4c9560eb2b677688c7026cf1f09",
".git/objects/ed/444696de1485fcca7fdd4fa5dcd59e5728dae4": "fe8378d84c2fe8391e6e05d0c4f68377",
".git/objects/c6/edafb4533deed9f6fe0d13586882ffb3bbc52a": "e9014da045e22f562b08b5f1b40f6dfd",
".git/objects/ec/748548263c53e1a34c8c3c5d3c7948b2fbaa2f": "3ab5c922b6bc6e1d84cd55835b6c3722",
".git/objects/4e/a18c6a98429233ed790426494af7ee54e2e461": "d51e1601af26d32a67e0c3b887cdd1ef",
".git/objects/4b/08c6c4ae33bd8536a53f756ddcd69b016c6c9b": "3e8aea7d23f83ee8029968e3c2f2e13c",
".git/objects/29/79029d79b9157f81c30d09a94fc7e209f231ff": "c90af405bc395b62be4a084f6b6b420c",
".git/objects/7c/14aa7d2d84e4e41d836bd8554a9f05ff7e34c3": "04bc5049835fece7a578663805fa462e",
".git/objects/45/f61674530095ac08d741913e775e284ff24b8c": "ee353d0344c3ecd10fe3edbc22233275",
".git/objects/73/90c83b4685008a1e3c0c02a2db3196f508a276": "569c0fa142f7f49447edbbb49635bcd3",
".git/objects/73/e9cee2bfaa9ceb156dc4146ef10eff990f45ef": "327d8a9539b0f88192059058205e351a",
".git/objects/80/c98b35e6c5c98c410c563612794349190cda9c": "feae4f9d7d628660e36b23ed9562bf8f",
".git/objects/1a/e662074b79a481f9db1b61dabb7e7b0ba70ab6": "2b0fde4a96387fe6dbbdd06d16e898d5",
".git/objects/28/882d1717a954f9c20cea4f08273c9c6bb026a7": "57823116e6bea08b5c3771b5318acaec",
".git/objects/8f/10e01e46963059bf0ee9c64e7ef41007fc2998": "06f67a713aa6f690e3e37446a958df4c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/8147cea96dac9e4f6eab17e5e99620ab06e249": "b321cc4a5d4cfdf38c0cda7bf1afc396",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/59e59950d91266a09471d6c38493ae9920a935": "f7671629e9aca00afb3da11d1cab3c7c",
".git/objects/21/4cd1c0d10e21477fdc4a9ae1a7ba98c5f5f45d": "d52afb1a44c4f0518553d534dcd3ec8f",
".git/objects/75/d28732fabd520f674d5b7134891feb50da5e06": "691d9608f9aa7c7783a5a5e674c909a5",
".git/objects/2f/2a53a30d4b55df19c1fc9ada08ce01a0feec53": "a2443558dfb0425c597090976c68651d",
".git/objects/2f/2c380400514d7194587adbcf26d7ed6496af5d": "c2e3b8d50f9455c50152b7cef0fff187",
".git/objects/43/71d7511822dd5aa898b5f59b4644e71caeaed1": "4c6f48951c96fbfae001404f1a752309",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/dd674e049523b1532bccad4ca41df981ac4d45": "38b5a6feb74eb81bd7df6e1f3dfda0db",
".git/objects/9a/d2c90deff6109e5f8bec63a478924904566d08": "6ccf25302ab4ef26b4e8a2fa6bd0557d",
".git/objects/36/a5db83593e8e98c8e118e958ca03e14546b502": "aa440a450a552a437b6de7e7aa70b3d2",
".git/objects/5c/2f3b2321fb6625b5c9dd32cc396f8d2f037190": "afcd09d070d1cbcfda003b8f9d849398",
".git/objects/31/53c4303a4bc0c4ea8a454005903d75865cdf39": "8ae16ea4298b7e7d388b3022b14a1094",
".git/objects/62/e11afb9b52b5861bbdea08ec416c9016f2f8b8": "a68e69adee24fd2e72e01e03986a1710",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/2ec1e584de88b87f59d81a80a24578bd0e3515": "093bbde35e1763edf5e7ad50018c4ba7",
".git/objects/3a/ea0d4a7c365ba4591a89a12cd5b58bc4454005": "07c9813c462c9aa0a2082d3891fb1652",
".git/objects/3a/60f9d330ff932f2af49f9d55eeafecf41f37c2": "cb7d14e817ccdb2902950cad1c4330fc",
".git/objects/3f/e8a9a1d183070e8a472e696c89f34823ce5580": "db7a46e31503705c553617783da12608",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/116ed22fa0ce000c69eb655f817c321a8ced91": "2fbcade62fd3041f5e7b47a27a6adf5d",
".git/objects/08/d6ddd97f86a2b641fbb9fbd2760bcd05ba1a7f": "769521354a286065cff4f0d39948bf6e",
".git/objects/6d/b8bcbe1118e7b1c8b91b2239ff9d87ac24858e": "317e20d5744e206510349e7d536342a2",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/99/5092df4c53d06fd39d76ab9a889ab9e81c9d40": "0e63297db2527451e82aeafb79f265ea",
".git/objects/55/811d4cde74332944890e8afbb2dca7f7f8d798": "663e4ba888ed03dc6f579493a55fcb10",
".git/objects/63/a43e7dfa05715155b6c946a99a2eb6f14ce973": "e6aae2db989c1c9e0d7b47cdb4a541ad",
".git/objects/0f/76fe54d7485dfdfea168c94302ed99fcd55d6e": "71d75196decc895b230be7ddf5391f60",
".git/objects/0a/6248b1d404ddbee3761fb5a3ccfa443646124e": "61f04c92bdb87b664379675b0d7bc786",
".git/objects/0a/0f826418f94b913c3b7427175eb7c13e4b601d": "ce6c86101aa69cb722122b328d5c1cf3",
".git/objects/bf/ff39915521e4352fa67a985d8eaec4e9849e42": "44faeac7bcb59785e9e586c1be293773",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/08d35d0fde19cfe57bcb3b83cd9ab0d3fbc306": "c51caa79aa7e81eb47d9c282d9f6d9e2",
".git/objects/ba/d096dc8cc159d02f322e066d69020b90834f06": "332d56af5ca1e2b8c85d93d35983b802",
".git/objects/a0/cd970f07cde4a4828cb970ed3a8531ca5e40ce": "b1a62a26e41f155c186de5326b52fdff",
".git/objects/a7/752405c7ec2fdf65c2f4231a1545ba6c5f1c39": "1f14fe48b128435f047f533d93669930",
".git/objects/b1/25b0324626551a72760847ec258c4a569f8c68": "18a8f671179f47572d743fae6a8ecf26",
".git/objects/a9/d72462886ac8c80e6a50b416b55b78165d0615": "61a25ce81276b86268a60fc39dd0baed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a8506aa5b6e3a20e54f046cbc365d1a6aae95e": "1a74cb67e159d53c18536c0a7a608d6a",
".git/objects/db/3bf35bfb874b26fca9fd909624cd3f8baad8f6": "19d99472861d74e8f468f4147c5c900b",
".git/objects/de/5a591127f634b88ccdc9d9241e91d1ab1b51f0": "98de433e1e95294bbe2a184392037ee8",
".git/objects/a6/4ca738eba510d1e454bb2eddfd98714e863479": "59660be93d533eb1bf541ff77f88ca1a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/31c65f06411d54c89cd5bab03158b954741a7e": "d234107d97d2377ba45d91c951202c9f",
".git/objects/ef/23a317fecbbc2d50a8d651eb6218cccbf91d35": "6face36ff03094fc0a13ce989035f067",
".git/objects/ea/891f82eba54f95ef25ce0e7eb5af7efba2cab9": "80cfa2164d2d3db1cb66d3d412dfdce3",
".git/objects/ea/47df2f74fcaaadc0e5678f47250b106a7f4839": "8612e8ef68f56b86e37731a4380d8426",
".git/objects/ea/719c6aee922b55dd0ba3bc8bace30a38ca4621": "99e0008dd4ecfb3d7ed654f089baf7ec",
".git/objects/e1/824b536b803baa479867ac3c6b86f4ce07e5ef": "d048c562eb693fa760524e47788de612",
".git/objects/e1/d4d80a5adf9d25d9d92090f81e48d2a4fdd344": "04b42fdba85f90806f79f4b8942ba0a2",
".git/objects/cc/3803d296122e2f6ac058f7aea02caf2064f9e0": "1ba2d269f991329b84d34216d81f8a17",
".git/objects/f7/dd31354a0c3b76464ad2c4f710fbc315df3733": "dd80bf616cb02be356186d9f8f5f3f24",
".git/objects/e8/480ce82b9c30a2f0fec2a977663f7dec2d7f43": "c4df17c70dedba624923a412e68b390c",
".git/objects/ff/dfa0fe83e780c83c2eb832eee670dedfc74d0b": "32c1ad50d28778a3a3c9f76d92f3024f",
".git/objects/c5/71310974e1a0c864f7760974784b6acb2f2e04": "7ef7d27736ee5f345ce8d979a2d42ebf",
".git/objects/c2/58b3568c5762f70e28016d910f7b0fc4548c3d": "34837731d3172f2e79b89ad88408a459",
".git/objects/f6/d9f64602963606b55d33156d48b99de7171a63": "fb20aacf59acd67f1f20092f9a99d7aa",
".git/objects/e9/fa00bf2952ba35656dada9f8a9fb78e34b5b64": "93335d2a7422022d665ed3ba05e5e948",
".git/objects/f8/6915864a316dac6ebb1b85eae9aed7959e24d3": "2ba384489a8c088b0b767c7720de7ec2",
".git/objects/ce/f51d83a10100122f432f5a3e0e7222f3a1dfc0": "13da37a39072a047298dbd1d033371af",
".git/objects/ce/2f283d06b542a2806eb4c25836ecb77730120e": "6f5bd61084d49cdf07e4d81f76e393ef",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/1e090ee34a9000a9dcc5525d0fa3d0101be4eb": "6b1c2ca7bf6a45c5607bb5c5ebf01fa7",
".git/objects/2c/137fe052c6d976667b95d3770c9dafb706a8fa": "d6233dda5a032d63ec8be05a3215b865",
".git/objects/79/e42ecdbe4db29d50840d3c6813ec454d5600eb": "258e0ad7746c4ea7ef0586d60b1d8203",
".git/objects/79/2e2e896208ec9d83c7179d7931f5466329c7e4": "9606f8f93b5d5323aa90eef019e2fa03",
".git/objects/79/e174375914ff1e09b4d72440b076799f9afd43": "5ae49bf19cce24fb4e6c8100f355f913",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/7be5625bcf8e71958592e32e0d7248db8f3a66": "aa4dddb86eb79b33ca9dccb28745f22b",
".git/objects/41/1a7d67c9bfdc14f5189a1ecbffdb1c5d8c7089": "7ae133a668762e9907f21de0523d5ad3",
".git/objects/83/c16e21f561ad7d81f59717001bda51c5b9912d": "a3ed9b94227d0e013d2f823b9f87adcb",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/70/e9adb274b18a85370f9deef183d759924bb464": "866d2f7911c3bf1aeb3e25877ca98402",
".git/objects/1e/5e2cd3ebfa011610e41ea575bab4cb7eece40a": "38a7fed4f8f7a45934ab24198fdb08c1",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/b3860fabca854e42d60218418c7aa764e7517e": "c24572130d508dfe6d1cd679b6a10fe6",
".git/objects/4a/cb41b7522f3acb5bc728cf023b3f611adb97d5": "252c101ffdd31bbcc8cec6d71ac669fb",
".git/objects/4f/408edd94053163ec9c8801396a516939b4c088": "909a17d050c547db56fd15ec79de6b44",
".git/objects/15/32aa8a3c103f2d9f460a7b9ff4bb905bbef642": "6b5a6d5fba8e38e047abcf5c1cade151",
".git/objects/15/513037556c1d87717d3399359f4911d0b2a390": "d3dc328b594de920432c1cef60abd8bb",
".git/objects/8c/ef7bbfa1fb25b6b8fd8d2d0997c92e0c73b708": "22326263cf9e9a0b0d7cd0d036fc6da1",
".git/objects/8c/a882d793440de44e95e49d79967b5b7827cc82": "c0679859ea6464d731b0fa094c33c894",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/89f86de8dbf7f6f9080e830573053af544bc47": "db2b9210f22cb0577cd910a0e79e162c",
".git/objects/49/dd4b063ab7dae8bfcc6b289619c196ecab2490": "ce446afd6d80486c475d4adb1c4c8b67",
".git/objects/40/9cb0e93d4d9405bb4176d31c953e51b264c36b": "63c36a9c2fda3540c5de7b07d934f48e",
".git/objects/2e/452f14440c5965a4a32d4adad063a0346c6caa": "f48a8790f5a9b196cffb287cb4867deb",
".git/objects/2b/bf77f91d1ae2a5f126b54f51a38892f545593a": "093326105f3f0dfa612dd5cf2dd29d1a",
".git/objects/13/5fb54163f8370a11b6ca098db52c8162170c7e": "95b3b4c065fa4709f5e863a50842f5e1",
".git/objects/13/8105b8e28fc6c8e29aaa9253ba0fdfc553d7b0": "5e5a1f5e4899b20df7e7d42a36e6b398",
".git/objects/7f/d44166e524544a570403869f6718c556a09e2f": "a989e0db5af8f5f3d07d3a102f555d78",
".git/objects/7f/2e7cd4529fed132ea96bd982e67c438c4dfca0": "0cbd9003db8feedd4322af8fc2114607",
".git/objects/7a/5a442334c22acb56f7a73abada33d4677ad26a": "bcfa79a0cff47c97c2f36eea0a07ecc4",
".git/objects/14/9cf6911fc1963e68f2c33c1072341dc8ed3fb2": "925af29bf5949bda47b1e260f31357c8",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/b3276fa9d9c191a22bd9f80afbf0594cd41fe4": "4b868af1aae1812aa79b6ae3eef2072c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "46e5a4ee57ea117cdfff25509c120553",
".git/logs/refs/heads/main": "46e5a4ee57ea117cdfff25509c120553",
".git/logs/refs/remotes/origin/main": "609bb197d7973c6ef9586d8836aac2b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ce5a26771526d63a9d64caf187fbaf3c",
".git/refs/remotes/origin/main": "ce5a26771526d63a9d64caf187fbaf3c",
".git/index": "219ac9200fffebd84cbbcac697c53ff1",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "62f0b15f479574e4b2013a11c9849128",
"assets/NOTICES": "a64e0b9e068fb0b64c9bd357f9d6d2b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4a991db809e648f92d7a8b24856816ec",
"assets/fonts/MaterialIcons-Regular.otf": "f7c3f84156a627ce01a22db6044b6eed",
"assets/assets/images/prmo_logo.png": "6ff095691f3ecfae96073f2ebedddd20",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
