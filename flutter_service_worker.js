'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d2c71fe4a3246dc8bbddf4a4b529de9a",
"index.html": "f3b3753c2fae4d1de4395d00cc5cec31",
"/": "f3b3753c2fae4d1de4395d00cc5cec31",
"main.dart.js": "87e65d7f20b3ba2d8bf44d45051d9c8f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "8ba536eee92dad377ddbb3f7804479e8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2344ba322a6c6369ae64a00ce780b95d",
".git/config": "ef6a87aa77302724525c88990ae7d616",
".git/objects/61/5fb02efeac9860396ef325f413ab420ed468cc": "7a63c3ef8409b025ca98005d5b54c342",
".git/objects/0d/c2e88f2f0233dcc262ad6d8ad7138a47dad71a": "8e6a3d82f01c8e257288566963c9bc9a",
".git/objects/0d/dd927301c0feeb6dcd5e6197c3792d02eaf409": "ebbbaea36158d3afd4671a13f10b896f",
".git/objects/95/2836835b71d54239dafca0686684ca918e0a97": "867120adec5f2b5d12b695a06e628ac2",
".git/objects/92/fea323e8e16f1a4344e927680e6623c7b856ee": "654e551f3bc9cba13cad5560662346d8",
".git/objects/92/d10059d51644a2ec40d9f74ee0d54a001a6a25": "a87f97cb68f47f04e1eb6c9f669aecf8",
".git/objects/92/908b3a51c61c91eeba4317aa03db90a80d8726": "1a1d42aa282582d096afe28c25f9f882",
".git/objects/66/bc8df1f90bd84e3ba8d2b17966a5d639035fd0": "cec1c4733812c9845ced30ffb9a2ebac",
".git/objects/3e/eb45a3171e10c230dd59a3c14ce8b79a5431eb": "88fc4fec83a14f997b16c3ce28c110cf",
".git/objects/50/3c507d9873582e1828dba1a08dd2caf9fc923f": "0218bfdea6ec94da0f0bd63854c170e4",
".git/objects/50/9366738055990c823972a0b2368a8c26c82b4a": "14239f94a7bc20d7d6498572f53bc0c0",
".git/objects/50/4758412773cc5ba48fc298f71d42a4c2fec6e2": "68873b269886d0e0fbe17c5b09a9c268",
".git/objects/68/f5ec84b997414c4021a0a0458bf3e7184da6f9": "8fc7cdc948de07bf02b93a83359ed13e",
".git/objects/68/f9fe6e6bb343a2cabdad393e2b04fa3d9f285a": "8d7aefcabb37d41616a8276acbb07db0",
".git/objects/68/29d07ad60378ff757912e19d599f500a8b8246": "64f0849e099b7b1644e50676b98bc0d3",
".git/objects/68/1e29530a493414bddeec8d2fefd4c918204336": "2827729b92c6f9cd98925b5b90e1cba1",
".git/objects/68/795a4400c7f920c291ecd7b31e440d19c967ac": "db74111522d158e53ce800dddac1e69f",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/799384a5d5754e08f35301a96ff3e4bcefee92": "d3b0f334c232a03e1f5f5d2283c77eb8",
".git/objects/3b/031e7ca2bbed401b8c55f3f8cff6cd2100bf4e": "1646a12c498e7f8ad85cb23109d873ea",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/fe67aed4ee0370c6aad9b47de8b0a4233d1a04": "10f5e690f32e6acabbb343846871afcc",
".git/objects/9e/25a8a1b32c7a05fd3e9b4be2897e39d208274c": "183ca5c460b21e05541aad7c2fe077fe",
".git/objects/6a/83d397d58760a00a1497eebc031eb6c9d33cb9": "05e57d20b65fcc4d2d5b088b9c8aacb1",
".git/objects/6a/dc67658149eb483651edd29d39c2b34adce6fa": "91bf6923828b77c89f6a2c133ad8cc62",
".git/objects/32/6c54b7df1c888151fa4699e68519c2080fb4ff": "e84d31a9c66cfdbb93bae405b2b25447",
".git/objects/35/2ff482ab8609fb14fa943e9aeedb11fb6d2835": "981a80c21c72ebac10e0038c6b7a208b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/36672aee0a607d8272d474d1405f1118125982": "1fe36ec848b36dca5fc54a62bbf43950",
".git/objects/3c/31a2e17f1db6054849cf44ee8defaf1a0fa4e3": "8d68b3f1d76d550f9f6547a9cba5f1a3",
".git/objects/56/a9c7a71fd9ec3880590d87db7ab4b48f8b4d1e": "5f5c9e41ecf95d1a23628296aec91be4",
".git/objects/56/b934e0c348d986f0f93a63a5ff38d622b04252": "e874f662864b8d7570f0cbc3de16acb8",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/3d/4e4e30e7144fb51346e9786c9855ef331fa949": "41de9435ce0e8ade4dbdfbecca4d1d25",
".git/objects/58/59b62b0aa22a8f87922e77999e7422ea872b06": "3fd62a236b128dd2f95ac3a89146a4cc",
".git/objects/58/292d31dc7ae2f27b393b867fe6d9df25c74664": "f0656889991a62e4b4169271d0efcbd6",
".git/objects/58/1894f6671a9a871888c3b4141dc8ac5bbc6e4e": "a1dc8b68002d65e4ef685cf863ad2080",
".git/objects/58/707ba88cf10447aad289371ad40b8fe51c46d8": "c41fa9d2eebf94d70fad1bbaae3e0268",
".git/objects/67/55a8b31372c406dab58ec1dea72854c3231384": "75023c772330f4e820092a44975dfb79",
".git/objects/67/88ccc87f1904a73a5d92781c205ed22db0c72a": "1f15210f78fd35a120085a21574ad7c5",
".git/objects/0b/a76bbb2bb7cb5bf2ad663ba22020ca1187baac": "239512f54617af5a67ed0163a0ae2a62",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/bef32701c129b6afa48641d63f48871a32c48b": "6ccdf81db5f9037a0fbaae7370c3d3c4",
".git/objects/94/c372c0cd1f751a6839e80fb8a0dc2ef95842c6": "bf47e530ec6a8a9d598f9253354335b6",
".git/objects/94/641ea15b273f827bed64bccf9b70c5661ff767": "57694ae018060e4f543d4d1dcc08b409",
".git/objects/0e/99cb09d41b0ef8205d29b55dbda597bfef93bb": "a0f9e62b135bce89aaad0d9095b8df7d",
".git/objects/60/7f8d4593f5f9f9288a88a988b2ca5a7c8d1f5c": "17bdc906ab42f0caa2c067413c3a49d7",
".git/objects/34/4b6cecc1c398364450fab09d443fb1bdab1d1b": "228ca77d950505e09cdf3648c5d71bb6",
".git/objects/34/92fa5e61716c1aa377a2ebe1d0977bd8ad4e35": "894c182c113e58b49e6254f4e5624271",
".git/objects/34/083fee096963fdb62dc91f719da3383e3d9b23": "3e18d50d8a938f0472f350ec683c233c",
".git/objects/34/59c5a7e0f1fa5b5c04f8e712a2b60ac6acf3c0": "556afe89f4d68fc062daa971d3e9f9c2",
".git/objects/5a/765b1727b7a0afb16169565473eeca57477719": "f924d4150736439a60740d47875dd89c",
".git/objects/5a/06e03fe28851439f6087bcb59871de3cbddace": "64d4b220c5dd743929787165be0ff2eb",
".git/objects/05/6ed4b9bb73b50abeb51c7b9bc2382ab8fb2439": "03990d617c398c3531d6f9d4ea6503a1",
".git/objects/9d/e4a9d7a15e8650027af28502c75ba1ae4a4b86": "5d78fdfaa703e8e9dc93d97057a68a3f",
".git/objects/02/7597f1b46c5ecf7bd33b27adeecbf0790fad50": "e24c41abdb051d13869cdaa12359320c",
".git/objects/a4/4456376daf10849d0ae8863ae27c5e67f27bfb": "c33fa22b3e3707fa2498c6f09bf4eb85",
".git/objects/a4/2101917d2eae0974ad43d01e6e5788d095056d": "a36a38079879622a02d5d8d4c81b1d51",
".git/objects/a3/0898842bf0356ee65363f66e917978e7935139": "309d6b9bb7f2b08c8e5075650fa34f8e",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/c66a15832c9729aea774ca31c77b87e377a8c6": "ee4f22a4f0b47c0af72584e014aa1ddf",
".git/objects/ac/93c4136569fd89561cf5ea6ba1b2a7c0d143ad": "4f9c88edba912970130c7325c8cad09c",
".git/objects/ac/2c44135152ca8707a5308b1d815b0d002d30dc": "0422d55bf47ccf361680f5df508be454",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/868ecb4374449c760ed166e53b66b654248000": "8ac1604678c3189047978d49e6feac62",
".git/objects/d7/d064de6e8684a98fb4764a241f9f50b4f9d3be": "cf36d8df3a70fe4c9566b6c05fb0c3f6",
".git/objects/b3/48e90bf68d2e4bedeef0fd3cb3c8edb96df9d0": "dbfab3e1b80c8ca1a7da9b09fe955390",
".git/objects/df/53afac4cd5d7df649e00a3667dc8dc6ed966c4": "1658488e032bf2ba9732d9dcfd9bcbe9",
".git/objects/df/613996b7c06b8064916d1096435088cf8c0ea7": "77237ae001152e8cad77b669d7af279c",
".git/objects/a2/8b30d0c9be3d960b40321fb98f4f137d3a37ae": "4db567663b967e11cb3c7071af08e4c2",
".git/objects/bd/0318c7d22f2f0eaa3cb89c509df795a89a63a4": "5d706f26bb4d0ed65cd3fdf7235419f0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/03629f68d30a63649ee340fe06ef2a8cb25257": "f9c7bcfbeef69ca36dfdd510c226fb8e",
".git/objects/bc/439712315dc6353cb8f85d354ab7ef276d974c": "b4fbe67dd011c70034033b940847ec4e",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/20e4f76a3d334f362db9bafe2755ff12ed4e59": "090bdf03f6fa27bd2b004c585e12e14e",
".git/objects/e2/d7282c462eac97f38ac3e1d26f681bb0a88698": "839b3f591219e82ff267ce4a2498c5ce",
".git/objects/f4/21c585df9f1bba93f1bf2ded0630d9bfd0a8bf": "d5665e0bcc590e95b559a2721cd46674",
".git/objects/f4/09decee7abfef1766febc4c80b29e219e87385": "62d9e61365c3d9c0d59b5814b9120800",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/1e6e40c4a3035871ba2e1ea5715d825a851f4b": "1f2670de825e3692905341dc9d97f3ce",
".git/objects/ee/f6eac68b2ff32456d3e468ca82422a5c1a50b9": "0f5642787ffbe50475ab98e1023aaa2c",
".git/objects/c9/f6553f3b18c7fa8a06f4c4b7ed1e27d2603d67": "5e95a372f10e17c47714ad0f49c4c371",
".git/objects/fc/0f831f2163a1fbe80a673879ef38ca99cea9da": "83d4aff84a61067728e7571c438afaa1",
".git/objects/fd/7aa9984edcbd1dff3883f157ea65f7798287c3": "26017e59b4039bbf4249e8faa48a1bed",
".git/objects/e3/ec840ab953cf6d177a29e2a190c65413500399": "da13945175cc1a12441c045d55909aa3",
".git/objects/cf/912e8335d3a6a7ed12b8bdb87131b7d3127d88": "cc137fe895bd0ee349fb93f14e61da47",
".git/objects/ca/83363bc2e8c26f3988c75834d0af63e8d5675b": "b3300175dd4cf3f97d9b466af73f466e",
".git/objects/fe/c1752242ac7047dc92073b5b843ddd9edd1d9a": "2fdc630a1b1d3af782a08b7e6db09196",
".git/objects/fe/b67402603c2ccd6be991bff0f6b4f603a2d887": "ff2e493ca7fc96e45ac1537b8754e93b",
".git/objects/c8/e9af1d5bdc990663fed2b5338955d36d714942": "71c3f02323676490452a48172f9ac415",
".git/objects/ed/bdc6651747b7e6986e928b11a1339be43b4a75": "c7a8a4c9560eb2b677688c7026cf1f09",
".git/objects/ed/444696de1485fcca7fdd4fa5dcd59e5728dae4": "fe8378d84c2fe8391e6e05d0c4f68377",
".git/objects/c6/edafb4533deed9f6fe0d13586882ffb3bbc52a": "e9014da045e22f562b08b5f1b40f6dfd",
".git/objects/ec/748548263c53e1a34c8c3c5d3c7948b2fbaa2f": "3ab5c922b6bc6e1d84cd55835b6c3722",
".git/objects/4e/03f7f7f13e67ff79c4c8f8977018070fd0ac26": "e62971a8701a30e29d6cf9eae4ce2036",
".git/objects/4e/a18c6a98429233ed790426494af7ee54e2e461": "d51e1601af26d32a67e0c3b887cdd1ef",
".git/objects/18/e7c546584f87437b587d18d48f505b93f15967": "d6fcbe41dbd34399216235d97b2aebfd",
".git/objects/18/0c7ad7aa469947f32d2f68f8ae3dba561d2a3b": "160125186163667c530edcf3d16115b8",
".git/objects/18/cbda1be6b22d048ea69f1f76140dcd74c1357b": "4295800a960a182d82a3bd6dcbaa421f",
".git/objects/27/05d694b9ba5064e5a71ab70efdf9a955fc0e44": "3adc2f982e7814ee63c18ab405095faa",
".git/objects/27/e96f905f3a58626220d635f52e6750ed6ec111": "809ab7a992f5d90c179b53896c9e66d0",
".git/objects/4b/08c6c4ae33bd8536a53f756ddcd69b016c6c9b": "3e8aea7d23f83ee8029968e3c2f2e13c",
".git/objects/11/d6576230ce9a75b43562ef87601fa5bea2f00b": "4b46d43560fcf060ca59041ce61eba13",
".git/objects/11/1cb3c14fef7fa37d110c0618b25e0c0b8cf8af": "505f8db71c5b2e366b84d9dbdd19c759",
".git/objects/29/79029d79b9157f81c30d09a94fc7e209f231ff": "c90af405bc395b62be4a084f6b6b420c",
".git/objects/7c/14aa7d2d84e4e41d836bd8554a9f05ff7e34c3": "04bc5049835fece7a578663805fa462e",
".git/objects/16/2ecac1237cb2c23208ea053adb6a9289e6a3ee": "279a331bdb8532d4bc32a35708732e31",
".git/objects/42/eb41f4d6c84a5920d0bfae2d94877e75a598d5": "c226c3ac8c914d1688592fe2cf1b2693",
".git/objects/45/f61674530095ac08d741913e775e284ff24b8c": "ee353d0344c3ecd10fe3edbc22233275",
".git/objects/73/90c83b4685008a1e3c0c02a2db3196f508a276": "569c0fa142f7f49447edbbb49635bcd3",
".git/objects/73/e9cee2bfaa9ceb156dc4146ef10eff990f45ef": "327d8a9539b0f88192059058205e351a",
".git/objects/87/724cb07aeb121d96561a5971ae11a52afcebe0": "62db35023acc7111d2e3788fa67a622d",
".git/objects/80/c98b35e6c5c98c410c563612794349190cda9c": "feae4f9d7d628660e36b23ed9562bf8f",
".git/objects/1a/4137b2ebc5c7a51d75923980605f0312689932": "987910b57b87f9a332a2098ce0efe6bd",
".git/objects/1a/ab55a85ccc796ea1f847a016c49872043ef9bf": "75a27e32f836820dadecd20649c87326",
".git/objects/1a/e662074b79a481f9db1b61dabb7e7b0ba70ab6": "2b0fde4a96387fe6dbbdd06d16e898d5",
".git/objects/28/882d1717a954f9c20cea4f08273c9c6bb026a7": "57823116e6bea08b5c3771b5318acaec",
".git/objects/28/57c7dc9341d2c968dc5ba567102ae3ac19e235": "b87371a56186822273ae3a9009a8ad08",
".git/objects/7b/1ae76426b7998ec786c29ff0a0c58c8f895df1": "a1ee46d84de3c5bb407adae1faa88c9d",
".git/objects/7b/e35cdef2456027362d54d198701a3d3029febc": "a5951674b6039673f8931b8f4db183b0",
".git/objects/8f/10e01e46963059bf0ee9c64e7ef41007fc2998": "06f67a713aa6f690e3e37446a958df4c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/09a707122061db91af2eba869e6d8d83bd4a27": "57de366f9366cc5259b5205bdb81eea2",
".git/objects/10/8147cea96dac9e4f6eab17e5e99620ab06e249": "b321cc4a5d4cfdf38c0cda7bf1afc396",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/230fd4a6a3571bd38901e8a34c833c3ce416c6": "8ea780bbb1776b239af5ae2c9bed7cce",
".git/objects/26/59e59950d91266a09471d6c38493ae9920a935": "f7671629e9aca00afb3da11d1cab3c7c",
".git/objects/26/4dfc4034ef459cec95e3ef86edc761cfc2407f": "23518e02e5dbb9a10428d05f704713e2",
".git/objects/21/4cd1c0d10e21477fdc4a9ae1a7ba98c5f5f45d": "d52afb1a44c4f0518553d534dcd3ec8f",
".git/objects/75/d28732fabd520f674d5b7134891feb50da5e06": "691d9608f9aa7c7783a5a5e674c909a5",
".git/objects/86/97ae7d996807c4dcb624e12fc3f824771b2723": "958c8099b9971aec23bf931c71a94615",
".git/objects/2f/2a53a30d4b55df19c1fc9ada08ce01a0feec53": "a2443558dfb0425c597090976c68651d",
".git/objects/2f/2c380400514d7194587adbcf26d7ed6496af5d": "c2e3b8d50f9455c50152b7cef0fff187",
".git/objects/43/f0a50d7d99f212c4ec98144b60d663eb9f4b0f": "610621e9caac30a19169a0b3eab58cd8",
".git/objects/43/59f2ff5809fd9b14b265dfbf7cbf35bc930404": "15a1541053399119b99f2fcad1ec0b7c",
".git/objects/43/71d7511822dd5aa898b5f59b4644e71caeaed1": "4c6f48951c96fbfae001404f1a752309",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/dd674e049523b1532bccad4ca41df981ac4d45": "38b5a6feb74eb81bd7df6e1f3dfda0db",
".git/objects/07/f7c15872493157189b0718eca4112cb11e8a30": "6b58df59abbe1979d7eaf11cda44a42e",
".git/objects/38/f5aca04b752a1cd9cd633fd74ec57605f764c6": "32c8e9f46341dbcdd8a5b36ac84c36e2",
".git/objects/00/9e520e0bf7f1f022acab5a0475b7caa68c2f91": "b420afa48d17cabc7551d7831eace1ca",
".git/objects/9a/d2c90deff6109e5f8bec63a478924904566d08": "6ccf25302ab4ef26b4e8a2fa6bd0557d",
".git/objects/9a/2cab4559b89e4176bcb4cd9f722a630ac300dc": "f714a7dff74d629245414873f5f9eea2",
".git/objects/36/a5db83593e8e98c8e118e958ca03e14546b502": "aa440a450a552a437b6de7e7aa70b3d2",
".git/objects/5c/2f3b2321fb6625b5c9dd32cc396f8d2f037190": "afcd09d070d1cbcfda003b8f9d849398",
".git/objects/5d/201d5b3b9e88c0765a2ad10dba1325cd5604d6": "7edc1a41270914ce73c8d42af555492f",
".git/objects/31/d9868bd04c60956604cfda07441a797c816f99": "fcf448e67b7fa1a0fc6fb80cbb3963df",
".git/objects/31/53c4303a4bc0c4ea8a454005903d75865cdf39": "8ae16ea4298b7e7d388b3022b14a1094",
".git/objects/31/017dc9a62869e3adc41aed93e574605b231d4f": "fb921e3c922c4c5c661665319326f2f9",
".git/objects/91/d51b6b4025035c5f70c67d4514249ef14f31da": "bb5ef8db28949c23fac5198f8b4e453f",
".git/objects/62/e11afb9b52b5861bbdea08ec416c9016f2f8b8": "a68e69adee24fd2e72e01e03986a1710",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/b9202b221bd766ba6b53226cf65ed34ec0a545": "1fc1371e1574f9cafa0e20d5f407d29b",
".git/objects/96/2ec1e584de88b87f59d81a80a24578bd0e3515": "093bbde35e1763edf5e7ad50018c4ba7",
".git/objects/3a/ea0d4a7c365ba4591a89a12cd5b58bc4454005": "07c9813c462c9aa0a2082d3891fb1652",
".git/objects/3a/60f9d330ff932f2af49f9d55eeafecf41f37c2": "cb7d14e817ccdb2902950cad1c4330fc",
".git/objects/98/5958ad7aceb53b868756a0945cbef803bed25f": "0cbbcbcdd303ce48fca47402eaf9ee29",
".git/objects/53/8e3c8541a331120575504ae947f67fe3ca00f5": "35068d0e9d8be190822f217bda0d50ff",
".git/objects/3f/e8a9a1d183070e8a472e696c89f34823ce5580": "db7a46e31503705c553617783da12608",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/116ed22fa0ce000c69eb655f817c321a8ced91": "2fbcade62fd3041f5e7b47a27a6adf5d",
".git/objects/08/d6ddd97f86a2b641fbb9fbd2760bcd05ba1a7f": "769521354a286065cff4f0d39948bf6e",
".git/objects/6d/b8bcbe1118e7b1c8b91b2239ff9d87ac24858e": "317e20d5744e206510349e7d536342a2",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/39/e55b0b65a581a8b2ae632afea3a900f44c4967": "cdc17cb5a860874818357fe40f3bd9ed",
".git/objects/99/5092df4c53d06fd39d76ab9a889ab9e81c9d40": "0e63297db2527451e82aeafb79f265ea",
".git/objects/52/e298e5c50ab8b411d78726228389bedb98d12e": "78208b2b34304569c33faf7eb09cf907",
".git/objects/55/811d4cde74332944890e8afbb2dca7f7f8d798": "663e4ba888ed03dc6f579493a55fcb10",
".git/objects/63/a43e7dfa05715155b6c946a99a2eb6f14ce973": "e6aae2db989c1c9e0d7b47cdb4a541ad",
".git/objects/0f/6cf23a09ecce5ddf5a5502b1baca93117c2ce3": "029a517e282d4cf5658d11774c1306f8",
".git/objects/0f/76fe54d7485dfdfea168c94302ed99fcd55d6e": "71d75196decc895b230be7ddf5391f60",
".git/objects/0a/6248b1d404ddbee3761fb5a3ccfa443646124e": "61f04c92bdb87b664379675b0d7bc786",
".git/objects/0a/0f826418f94b913c3b7427175eb7c13e4b601d": "ce6c86101aa69cb722122b328d5c1cf3",
".git/objects/bf/028157fc3a38ff44ec397bc0285dc4cb549f99": "a3b0821df56ca5ae2a60430649507802",
".git/objects/bf/ff39915521e4352fa67a985d8eaec4e9849e42": "44faeac7bcb59785e9e586c1be293773",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/ecff4f627e1c29fc8899e601fcb36316d5f71f": "1dc11ef5fe1a05cec6f7f0efdd72d723",
".git/objects/ba/544958f5fd7c01efdcead6acac3a368a31e532": "99e3c779a7dcae293937872734ebc6fd",
".git/objects/ba/08d35d0fde19cfe57bcb3b83cd9ab0d3fbc306": "c51caa79aa7e81eb47d9c282d9f6d9e2",
".git/objects/ba/d096dc8cc159d02f322e066d69020b90834f06": "332d56af5ca1e2b8c85d93d35983b802",
".git/objects/ba/449802ccb0073b414af6dacc0d14c490499027": "9ffc1d1f9573980b894a59eae157b5ae",
".git/objects/ba/87cb0244812606039f5955e0753bd88b432073": "1a3246c44ec2bb52fd39370529c6cdcc",
".git/objects/a0/cd970f07cde4a4828cb970ed3a8531ca5e40ce": "b1a62a26e41f155c186de5326b52fdff",
".git/objects/a0/ad7f1d470fd369cccb87f0bb305e2868dd09fa": "819ea92e5be650df1ca7b3eec93c0deb",
".git/objects/a0/d76fce12007f9ddfcaca423884eec358e3017a": "68c58d44fa8c26a1dd60c3fbfafd066e",
".git/objects/a7/752405c7ec2fdf65c2f4231a1545ba6c5f1c39": "1f14fe48b128435f047f533d93669930",
".git/objects/b1/25b0324626551a72760847ec258c4a569f8c68": "18a8f671179f47572d743fae6a8ecf26",
".git/objects/dd/ff95eb88e56a3070f2d6836b83ba2fae31f3d1": "4f8eb5923ae6f3f10bc5e76c8cefb70c",
".git/objects/dd/de908354663603b0e43316d2b0a734f22b8950": "1c96204cade1dc837b000f10a93d4b02",
".git/objects/dc/76892aa0392998b249bc9db30b772b5ef6f2b1": "4bae9e9368d38ec3514bfe00ac00c69f",
".git/objects/b6/74c7139112f3515fbddab3e4afb7890fc4e94c": "9672b0077d431e77c5a8b06afecac1a2",
".git/objects/a9/01dd63cc96e1e10792a516564485515c0fbdf3": "c285a36ae59aa83413434b7040be77b1",
".git/objects/a9/d72462886ac8c80e6a50b416b55b78165d0615": "61a25ce81276b86268a60fc39dd0baed",
".git/objects/a9/d770fce549e9f965465d66d61799ce49e96901": "23780bdb491ba0593f109d44c43cca81",
".git/objects/a9/a16a5552a92803bd56e94a122b52b4b2abf9a0": "24595b8720ffe4835b5567201dd5029c",
".git/objects/d5/b1ecdd18c85bb388a914029d781d7a1100a592": "98203721eed3daebae990b8e7399eca1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e48085e8758bd32330c95d3212d6f990d1b0b9": "b3f98d3c8e12bcd737df8d5d90e1c2e4",
".git/objects/b7/a8506aa5b6e3a20e54f046cbc365d1a6aae95e": "1a74cb67e159d53c18536c0a7a608d6a",
".git/objects/db/3bf35bfb874b26fca9fd909624cd3f8baad8f6": "19d99472861d74e8f468f4147c5c900b",
".git/objects/db/6e32b6ea40b7bf58e2c5be98bb05fd7bf2b39e": "c0ea65d310e3910ca5a52885dd530c29",
".git/objects/a8/4b11302e31cf24b04fe8ca94e6d62bca31af9a": "67ed5e5aaf68479514dd5de31707dce6",
".git/objects/de/5a591127f634b88ccdc9d9241e91d1ab1b51f0": "98de433e1e95294bbe2a184392037ee8",
".git/objects/b0/27e25806803e07b39412d1fa381fedeef374fc": "de91852c1551b0de5766ad23ea1850f2",
".git/objects/a6/4ca738eba510d1e454bb2eddfd98714e863479": "59660be93d533eb1bf541ff77f88ca1a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/31c65f06411d54c89cd5bab03158b954741a7e": "d234107d97d2377ba45d91c951202c9f",
".git/objects/ef/23a317fecbbc2d50a8d651eb6218cccbf91d35": "6face36ff03094fc0a13ce989035f067",
".git/objects/c3/7d7d045533e3722bf96e9ab404473b5a875854": "3bb09272a74f6b576cedfd33955e9acc",
".git/objects/c4/919f751addb5e5c1893dcfd2a63fac9ff5b74e": "22a5a8348c1713604536acf2c4816d2f",
".git/objects/ea/891f82eba54f95ef25ce0e7eb5af7efba2cab9": "80cfa2164d2d3db1cb66d3d412dfdce3",
".git/objects/ea/47df2f74fcaaadc0e5678f47250b106a7f4839": "8612e8ef68f56b86e37731a4380d8426",
".git/objects/ea/719c6aee922b55dd0ba3bc8bace30a38ca4621": "99e0008dd4ecfb3d7ed654f089baf7ec",
".git/objects/e1/824b536b803baa479867ac3c6b86f4ce07e5ef": "d048c562eb693fa760524e47788de612",
".git/objects/e1/d4d80a5adf9d25d9d92090f81e48d2a4fdd344": "04b42fdba85f90806f79f4b8942ba0a2",
".git/objects/e1/c35566aafe62bfa7adadb4964e7feaa6bc1241": "58de04e8a98724c512f7cde83e3933f0",
".git/objects/cc/3803d296122e2f6ac058f7aea02caf2064f9e0": "1ba2d269f991329b84d34216d81f8a17",
".git/objects/e6/72422d1a77c8db632ea73fdfb7b06321b33d05": "5de2f9fbe38666d1139ce24c4e09c623",
".git/objects/e6/ef5137e70a6d764dedf1f355ded441295305bb": "42f599a67ffe589806bc44db2c775496",
".git/objects/f9/0a0693038978f8edd00e5d2924626c7307caff": "b7670ba7519cddb1fa1b74c72fbf3417",
".git/objects/f7/dd31354a0c3b76464ad2c4f710fbc315df3733": "dd80bf616cb02be356186d9f8f5f3f24",
".git/objects/e8/5bb4ce42fb63cdf4aa1923ce590dea70d73c7b": "e5c346f4999e130eaa137807c193f935",
".git/objects/e8/480ce82b9c30a2f0fec2a977663f7dec2d7f43": "c4df17c70dedba624923a412e68b390c",
".git/objects/fa/89f8ac0d65975b2a00f4a86925bdddabb24e4f": "1898266ee3ee31c7347d756834160aa4",
".git/objects/ff/a73968555eecc4cc16451208d2063231d1ad08": "84bd6af9118cc90fd301ce28ec9e508a",
".git/objects/ff/dfa0fe83e780c83c2eb832eee670dedfc74d0b": "32c1ad50d28778a3a3c9f76d92f3024f",
".git/objects/c5/71310974e1a0c864f7760974784b6acb2f2e04": "7ef7d27736ee5f345ce8d979a2d42ebf",
".git/objects/c5/9f2493b6d348c3b87523ddefb48ff8866b791f": "27e4cb555b6c9c22f30c996790d1e8a3",
".git/objects/c2/58b3568c5762f70e28016d910f7b0fc4548c3d": "34837731d3172f2e79b89ad88408a459",
".git/objects/f6/ab60321025edf8e48f7f9dfb04ee4ebf06a315": "4161c9a9741ee5fa00487ca040f4d4b9",
".git/objects/f6/d9f64602963606b55d33156d48b99de7171a63": "fb20aacf59acd67f1f20092f9a99d7aa",
".git/objects/e9/fa00bf2952ba35656dada9f8a9fb78e34b5b64": "93335d2a7422022d665ed3ba05e5e948",
".git/objects/f1/05ee1db9b73f498d2729d2cb6d77193d7f1005": "418b59835cd0ec53717eb1a0d53829fd",
".git/objects/cb/0f1b1e640f8882f6e08769430c24eb090dbf35": "030f3ebf4a4b8c130f0e6fd815fe14d2",
".git/objects/cb/2e2eaab1755c7aa204b557dc05730c4b3a5ea1": "5a9344894c5b0ba01bca5446314bd5c2",
".git/objects/f8/6915864a316dac6ebb1b85eae9aed7959e24d3": "2ba384489a8c088b0b767c7720de7ec2",
".git/objects/ce/f51d83a10100122f432f5a3e0e7222f3a1dfc0": "13da37a39072a047298dbd1d033371af",
".git/objects/ce/2f283d06b542a2806eb4c25836ecb77730120e": "6f5bd61084d49cdf07e4d81f76e393ef",
".git/objects/e0/e4409fee2a1b80082524cc04e5455b452c9a94": "44f730f14d11bb7150ba85bfbf34e47e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/1e090ee34a9000a9dcc5525d0fa3d0101be4eb": "6b1c2ca7bf6a45c5607bb5c5ebf01fa7",
".git/objects/2c/56b0d13aa16fc4181e87b52cadd2d3b937529c": "91316b62db6ca25cb9e74a8516df0925",
".git/objects/2c/137fe052c6d976667b95d3770c9dafb706a8fa": "d6233dda5a032d63ec8be05a3215b865",
".git/objects/79/e42ecdbe4db29d50840d3c6813ec454d5600eb": "258e0ad7746c4ea7ef0586d60b1d8203",
".git/objects/79/2e2e896208ec9d83c7179d7931f5466329c7e4": "9606f8f93b5d5323aa90eef019e2fa03",
".git/objects/79/e174375914ff1e09b4d72440b076799f9afd43": "5ae49bf19cce24fb4e6c8100f355f913",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/7be5625bcf8e71958592e32e0d7248db8f3a66": "aa4dddb86eb79b33ca9dccb28745f22b",
".git/objects/2d/919f543e19d4ec490a6884c7c19d819d317357": "c7a62cef32b00217093c72cfc5dfc555",
".git/objects/41/dee4d8097a2b85eae72080d8f0a3314b5e7676": "0d4a9c9070590e13b17256599e02f8d7",
".git/objects/41/7012ee4d489b2ae554f402ce8c9443035331e3": "bcd6a18cc8684cf2bfac89832993a66f",
".git/objects/41/1a7d67c9bfdc14f5189a1ecbffdb1c5d8c7089": "7ae133a668762e9907f21de0523d5ad3",
".git/objects/41/3d0975baac7875feb9ef8ae31cea25cee2ab15": "773a94f39a1bec86f1e6a4b335d290ab",
".git/objects/83/3076d14a550a740ac14eb7c8479054b1847c1c": "9e57c180bafd716b2dd7c241b34d0cbf",
".git/objects/83/c16e21f561ad7d81f59717001bda51c5b9912d": "a3ed9b94227d0e013d2f823b9f87adcb",
".git/objects/1b/f3e861be6401396804b7d8aeac86c18044eff7": "48a206114654eb3473b188e9e334d195",
".git/objects/77/e15ecf74569f0dbd65d38a9bfd10a785188644": "13ab18803321ef97103dd325b0e7ba35",
".git/objects/77/6f32d606497827803444023292ae1465723e14": "a2319e16337e422ad4af58507b82d58b",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/70/e9adb274b18a85370f9deef183d759924bb464": "866d2f7911c3bf1aeb3e25877ca98402",
".git/objects/70/429abdfbba3ba3e54fb7e8c37777ed6bd0873b": "e42dc7b14203c99874757e524f8f2aa9",
".git/objects/1e/2472a71a5c200101bc842421091184c11c98d7": "b8df32b6ba2d8e155de8d81486f2451f",
".git/objects/1e/5e2cd3ebfa011610e41ea575bab4cb7eece40a": "38a7fed4f8f7a45934ab24198fdb08c1",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/44e3914ecee743b5b59ffc31575b8ba048ba6d": "a01689c03392aa8a2309d1bd319c9777",
".git/objects/4a/b3860fabca854e42d60218418c7aa764e7517e": "c24572130d508dfe6d1cd679b6a10fe6",
".git/objects/4a/cb41b7522f3acb5bc728cf023b3f611adb97d5": "252c101ffdd31bbcc8cec6d71ac669fb",
".git/objects/24/963b220fa348056b7dd96d75816d72d792ae8f": "d09674f34f0db27c0590ce05a49a54e0",
".git/objects/4f/4b18a450625d59f86f2cfe4488d130498aa435": "32f4c0e24f7fb0bbfe6d633c904997b5",
".git/objects/4f/408edd94053163ec9c8801396a516939b4c088": "909a17d050c547db56fd15ec79de6b44",
".git/objects/15/32aa8a3c103f2d9f460a7b9ff4bb905bbef642": "6b5a6d5fba8e38e047abcf5c1cade151",
".git/objects/15/513037556c1d87717d3399359f4911d0b2a390": "d3dc328b594de920432c1cef60abd8bb",
".git/objects/12/2e4f2881410d5f095b1ae9b0ee291a766abc8c": "ac0a09c11de0a30c008bf0ef4bc289f3",
".git/objects/12/02a525fc4efeffa406f78e26ecfc417089fda4": "dad27a8ad8736013d9f9794194503898",
".git/objects/8c/ef7bbfa1fb25b6b8fd8d2d0997c92e0c73b708": "22326263cf9e9a0b0d7cd0d036fc6da1",
".git/objects/8c/a882d793440de44e95e49d79967b5b7827cc82": "c0679859ea6464d731b0fa094c33c894",
".git/objects/1d/42892fdcf4fbc7ed689e7107db8a1b29ce793f": "a7018c259dcdf4c084cdc71c4b8b3d41",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/89f86de8dbf7f6f9080e830573053af544bc47": "db2b9210f22cb0577cd910a0e79e162c",
".git/objects/71/6e596b4ececbf77af5386b2b10bf3e6de3f832": "3ae8ed4028a5ea3869796b1e2e749715",
".git/objects/1c/11f92a25c66c7b5f63446c812f70b1b01f34e6": "33f3a7be5edcf028c0c8f803c2a5cc47",
".git/objects/49/dd4b063ab7dae8bfcc6b289619c196ecab2490": "ce446afd6d80486c475d4adb1c4c8b67",
".git/objects/40/9cb0e93d4d9405bb4176d31c953e51b264c36b": "63c36a9c2fda3540c5de7b07d934f48e",
".git/objects/2e/def8d226d65609ce265e152c7f83509d762d05": "c549bcf9eda58c53453c8b9d3784d00a",
".git/objects/2e/452f14440c5965a4a32d4adad063a0346c6caa": "f48a8790f5a9b196cffb287cb4867deb",
".git/objects/2b/bf77f91d1ae2a5f126b54f51a38892f545593a": "093326105f3f0dfa612dd5cf2dd29d1a",
".git/objects/13/5fb54163f8370a11b6ca098db52c8162170c7e": "95b3b4c065fa4709f5e863a50842f5e1",
".git/objects/13/8105b8e28fc6c8e29aaa9253ba0fdfc553d7b0": "5e5a1f5e4899b20df7e7d42a36e6b398",
".git/objects/7f/d44166e524544a570403869f6718c556a09e2f": "a989e0db5af8f5f3d07d3a102f555d78",
".git/objects/7f/ef64e0bc56481e986a1ad8aabd098f907db42c": "6ebe1cc37a849fd62d053153288a2245",
".git/objects/7f/2e7cd4529fed132ea96bd982e67c438c4dfca0": "0cbd9003db8feedd4322af8fc2114607",
".git/objects/7a/a68ad706e632e8cb4d86b8db094a9a0deaa10a": "2e5265e2ac7c3dc4984885a3e3e3c603",
".git/objects/7a/5a442334c22acb56f7a73abada33d4677ad26a": "bcfa79a0cff47c97c2f36eea0a07ecc4",
".git/objects/7a/bf96ab0b4e65d04c423adee40c883c640a65e7": "4b39fcb65bfbab9ff96701bc8fd2b1bd",
".git/objects/14/cf716a94dc4a93d08a48f19cb4cad576eedd5c": "0a13843b1fdbe0794bea3170af0d3bb0",
".git/objects/14/9cf6911fc1963e68f2c33c1072341dc8ed3fb2": "925af29bf5949bda47b1e260f31357c8",
".git/objects/14/e80c2f62cf13f70f3ff82a9091e45f40697d61": "a67cb889adc1f37ef1112488078adc1a",
".git/objects/14/e3fcd8cbf012e5e1c9a1c64cd133ca74cb202d": "38018020f78c0f3d3533b1085f14ffc3",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/b3276fa9d9c191a22bd9f80afbf0594cd41fe4": "4b868af1aae1812aa79b6ae3eef2072c",
".git/objects/25/af622ded6e126627601abc34231f0e64d1c083": "24b0f74ef47738b531b3ac05226238f7",
".git/objects/25/43ca032df5ea24a67858290a6f00212cca6daf": "acdacfaa391304575b0380aa1e6b958a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2cd87fd9e6a9da4678f2d6d64789b93e",
".git/logs/refs/heads/main": "2cd87fd9e6a9da4678f2d6d64789b93e",
".git/logs/refs/remotes/origin/main": "6c32d3f5cf45ee69c46d0a9384aae7dd",
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
".git/refs/heads/main": "c4de072059ab5ab6ed7dd669ac993c76",
".git/refs/remotes/origin/main": "c4de072059ab5ab6ed7dd669ac993c76",
".git/index": "e03725a25d67062117f2395ad5d9e774",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "62f0b15f479574e4b2013a11c9849128",
"assets/NOTICES": "a64e0b9e068fb0b64c9bd357f9d6d2b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4a991db809e648f92d7a8b24856816ec",
"assets/fonts/MaterialIcons-Regular.otf": "868d972ac93e2804132d8659fd7b8941",
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
