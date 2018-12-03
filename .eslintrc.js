module.exports = {
  env: {
    node: true,
    jest: true,
    es6: true
  },
  extends: 'react-app',
  parserOptions: {
    ecmaFeature: {
      jsx: true
    }
  },
  plugins: ['react', 'jsx-a11y', 'import', 'spellcheck'],
  globals: {
    resolveLog: true
  },
  rules: {
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': ['error', 'never'],
    'no-plusplus': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': ['error', { props: false }],
    'new-cap': ['error', { capIsNew: false }],
    'no-lone-block': 'off',
    'no-lone-blocks': 'off',
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': ['error', { args: 'after-used' }],
    'max-len': [
      'warn',
      {
        code: 100,
        comments: 10000
      }
    ],
    'eol-last': ['error', 'always'],
    'no-console': ['error'],
    'spellcheck/spell-checker': [
      'error',
      {
        comments: false,
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWordIfMatch: ['^[^A-Za-z_]'],
        skipWords: [
          'acc',
          'ack',
          'adm',
          'ajv',
          'amqp',
          'amqplib',
          'analytics',
          'api',
          'Apis',
          'apis',
          'applescript',
          'applicationautoscaling',
          'appspot',
          'arg',
          'args',
          'argv',
          'arn',
          'askstories',
          'async',
          'auth',
          'autoload',
          'autoprefixer',
          'aws',
          'awslambda',
          'babelify',
          'babelrc',
          'backend',
          'basename',
          'behaviour',
          'bool',
          'bson',
          'btn',
          'buf',
          'calc',
          'cax',
          'cdn',
          'chai',
          'chainable',
          'charset',
          'checkbox',
          'cjs',
          'cli',
          'cmd',
          'codeload',
          'Codepage',
          'commonjs',
          'config',
          'configs',
          'connack',
          'const',
          'Cooldown',
          'corejs',
          'cron',
          'cwd',
          'darwin',
          'dddddd',
          'deepmerge',
          'del',
          'desc',
          'deserialize',
          'deserialized',
          'deserializer',
          'deserializers',
          'dev',
          'devtool',
          'devtools',
          'dir',
          'dirname',
          'dns',
          'doctype',
          'dom',
          'dotenv',
          'downvote',
          'dup',
          'dynamodb',
          'ecma',
          'envs',
          'eqeqeq',
          'eql',
          'errno',
          'escaper',
          'escaperegexp',
          'eslint',
          'eventstore',
          'execpath',
          'expr',
          'extname',
          'facebook',
          'fanout',
          'fas',
          'favicon',
          'fff',
          'ffffff',
          'filename',
          'filenames',
          'firebase',
          'firebaseio',
          'fontawesome',
          'formatter',
          'func',
          'github',
          'gte',
          'gzip',
          'hmac',
          'hmr',
          'hostname',
          'href',
          'html',
          'http',
          'https',
          'ico',
          'iconv',
          'idx',
          'Img',
          'img',
          'impl',
          'indexreadpolicy',
          'indexwritepolicy',
          'init',
          'inline',
          'inlined',
          'inlines',
          'instanceof',
          'interop',
          'invoker',
          'Ionicons',
          'ios',
          'Iot',
          'IotData',
          'iotdevicegateway',
          'iterable',
          'jpg',
          'jpeg',
          'jsons',
          'jsonschema',
          'jsonwebtoken',
          'jwt',
          'lan',
          'len',
          'libs',
          'linearized',
          'localhost',
          'lodash',
          'lte',
          'Mergeable',
          'middleware',
          'middlewares',
          'minimist',
          'mongo',
          'mongodb',
          'monorepo',
          'Monorepos',
          'mqtt',
          'msg',
          'mysql',
          'namespace',
          'namespaces',
          'nav',
          'navbar',
          'nedb',
          'newstories',
          'noop',
          'noredirect',
          'npm',
          'npmjs',
          'npx',
          'nullable',
          'nullish',
          'obj',
          'objs',
          'oper',
          'opn',
          'osascript',
          'palevioletred',
          'papayawhip',
          'param',
          'parameterized',
          'params',
          'pathname',
          'pid',
          'pingreq',
          'pingresp',
          'plur',
          'png',
          'polyfill',
          'polyfills',
          'postcss',
          'prefetch',
          'preloader',
          'Presigned',
          'prev',
          'println',
          'proc',
          'proto',
          'pubsub',
          'qos',
          'rabbitmq',
          'raf',
          'react',
          'reactivity',
          'readdir',
          'readmodel',
          'readpolicy',
          'realtime',
          'redux',
          'referer',
          'refman',
          'regenerator',
          'reimagined',
          'reinitialization',
          'remotedev',
          'renderer',
          'Renderless',
          'renderless',
          'repo',
          'req',
          'res',
          'resolvejs',
          'resolver',
          'resolvers',
          'respawn',
          'rgba',
          'rmdir',
          'Roboto',
          'Rootable',
          'runtime',
          'sanitizer',
          'scalable',
          'sdk',
          'sep',
          'serializable',
          'setsockopt',
          'sha512',
          'Sharings',
          'showstories',
          'sinon',
          'socktype',
          'splitter',
          'sql',
          'squaremobius',
          'src',
          'stderr',
          'stdin',
          'stdout',
          'str',
          'sts',
          'suback',
          'subdirectory',
          'svg',
          'symlink',
          'Tablename',
          'tcp',
          'testcafe',
          'textarea',
          'tgz',
          'timestamp',
          'tmp',
          'todo',
          'todolist',
          'todos',
          'topstories',
          'truthy',
          'ttf',
          'ttl',
          'txt',
          'typeof',
          'undef',
          'unfetch',
          'unicode',
          'unlink',
          'unmarshall',
          'unmocked',
          'unmount',
          'unordered',
          'unserializable',
          'unshare',
          'unshift',
          'unsuback',
          'unsubscribe',
          'unsubscription',
          'unsubscriptions',
          'unvote',
          'unvoted',
          'upsert',
          'upvote',
          'upvoted',
          'url',
          'urlencoded',
          'urls',
          'usr',
          'utf',
          'utf8mb4',
          'util',
          'utils',
          'uuid',
          'validator',
          'verdana',
          'viewport',
          'webpack',
          'wikipedia',
          'wildcard',
          'workspaces',
          'writepolicy',
          'wss',
          'www',
          'xcopy',
          'xpub',
          'xsub',
          'xyz',
          'yargs',
          'ycombinator',
          'zeromq',
          'zmq'
        ],
        minLength: 3
      }
    ]
  }
}
