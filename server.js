'use strict';
const a0_0x335e0b = a0_0x4f78;
(function(_0x5917ad, _0x39233e) {
    const _0x2f3eb6 = a0_0x4f78,
        _0x54d64d = _0x5917ad();
    while (!![]) {
        try {
            const _0x261255 = parseInt(_0x2f3eb6(0x1cf)) / 0x1 * (-parseInt(_0x2f3eb6(0x1ed)) / 0x2) + parseInt(_0x2f3eb6(0x1ee)) / 0x3 * (-parseInt(_0x2f3eb6(0x1b0)) / 0x4) + parseInt(_0x2f3eb6(0x223)) / 0x5 * (parseInt(_0x2f3eb6(0x1fc)) / 0x6) + -parseInt(_0x2f3eb6(0x1f0)) / 0x7 * (-parseInt(_0x2f3eb6(0x212)) / 0x8) + parseInt(_0x2f3eb6(0x1e0)) / 0x9 * (parseInt(_0x2f3eb6(0x1f3)) / 0xa) + -parseInt(_0x2f3eb6(0x20a)) / 0xb * (parseInt(_0x2f3eb6(0x1ae)) / 0xc) + -parseInt(_0x2f3eb6(0x1e1)) / 0xd;
            if (_0x261255 === _0x39233e) break;
            else _0x54d64d['push'](_0x54d64d['shift']());
        } catch (_0x5331d7) {
            _0x54d64d['push'](_0x54d64d['shift']());
        }
    }
}(a0_0x18aa, 0xcae34));
var __createBinding = this && this[a0_0x335e0b(0x1bc)] || (Object[a0_0x335e0b(0x1ec)] ? function(_0x3c996b, _0x4cbbcf, _0x41981f, _0xa4ee7a) {
        const _0x38eccc = a0_0x335e0b;
        if (_0xa4ee7a === undefined) _0xa4ee7a = _0x41981f;
        var _0x488aa0 = Object['getOwnPropertyDescriptor'](_0x4cbbcf, _0x41981f);
        (!_0x488aa0 || ('get' in _0x488aa0 ? !_0x4cbbcf[_0x38eccc(0x1ba)] : _0x488aa0['writable'] || _0x488aa0[_0x38eccc(0x227)])) && (_0x488aa0 = {
            'enumerable': !![],
            'get': function() {
                return _0x4cbbcf[_0x41981f];
            }
        }), Object[_0x38eccc(0x1fe)](_0x3c996b, _0xa4ee7a, _0x488aa0);
    } : function(_0x31d202, _0x34afd2, _0x13b269, _0x2a2267) {
        if (_0x2a2267 === undefined) _0x2a2267 = _0x13b269;
        _0x31d202[_0x2a2267] = _0x34afd2[_0x13b269];
    }),
    __setModuleDefault = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x227cee, _0x2b9b86) {
        const _0x2e6797 = a0_0x335e0b;
        Object[_0x2e6797(0x1fe)](_0x227cee, _0x2e6797(0x20b), {
            'enumerable': !![],
            'value': _0x2b9b86
        });
    } : function(_0x1d6e18, _0x50d299) {
        const _0x5504a4 = a0_0x335e0b;
        _0x1d6e18[_0x5504a4(0x20b)] = _0x50d299;
    }),
    __importStar = this && this[a0_0x335e0b(0x203)] || function(_0x153ebe) {
        const _0x87f058 = a0_0x335e0b;
        if (_0x153ebe && _0x153ebe[_0x87f058(0x1ba)]) return _0x153ebe;
        var _0x3788bd = {};
        if (_0x153ebe != null) {
            for (var _0xf6af6f in _0x153ebe)
                if (_0xf6af6f !== _0x87f058(0x20b) && Object['prototype']['hasOwnProperty'][_0x87f058(0x219)](_0x153ebe, _0xf6af6f)) __createBinding(_0x3788bd, _0x153ebe, _0xf6af6f);
        }
        return __setModuleDefault(_0x3788bd, _0x153ebe), _0x3788bd;
    },
    __importDefault = this && this[a0_0x335e0b(0x1c2)] || function(_0x1c60d1) {
        return _0x1c60d1 && _0x1c60d1['__esModule'] ? _0x1c60d1 : {
            'default': _0x1c60d1
        };
    };
Object[a0_0x335e0b(0x1fe)](exports, a0_0x335e0b(0x1ba), {
    'value': !![]
});
const express_1 = __importDefault(require('express')),
    cors_1 = __importDefault(require(a0_0x335e0b(0x1d6))),
    circuitutils_1 = require(a0_0x335e0b(0x1f5)),
    common_1 = require(a0_0x335e0b(0x1b8)),
    verify_1 = require(a0_0x335e0b(0x214)),
    logger_1 = require('../src/logger'),
    process_1 = require(a0_0x335e0b(0x207)),
    redis_1 = require(a0_0x335e0b(0x225)),
    instrumentation_1 = require('../src/instrumentation'),
    yaml = __importStar(require(a0_0x335e0b(0x1f8))),
    node_fs_1 = require(a0_0x335e0b(0x226)),
    port = process_1[a0_0x335e0b(0x208)][0x2] || 0x1f90,
    rapidsnark_service_uri = process_1[a0_0x335e0b(0x1c6)]['PROVER_URI'] ?? a0_0x335e0b(0x1b6),
    app = (0x0, express_1['default'])(),
    allowed_origins = process_1[a0_0x335e0b(0x1c6)][a0_0x335e0b(0x222)]?.[a0_0x335e0b(0x21d)](',') ?? '*';
(0x0, logger_1[a0_0x335e0b(0x1dd)])(a0_0x335e0b(0x1d3) + JSON['stringify'](allowed_origins)), app['use']((0x0, cors_1[a0_0x335e0b(0x20b)])({
    'origin': allowed_origins
})), app[a0_0x335e0b(0x1d0)](express_1['default'][a0_0x335e0b(0x211)]());
let WHITELISTED_AUDIENCES = null,
    cache = null,
    instr = null;

function bigintStringify(_0x253a31) {
    const _0xf5e5e9 = a0_0x335e0b;
    return JSON[_0xf5e5e9(0x221)](_0x253a31, (_0x439713, _0xdf0a7f) => typeof _0xdf0a7f === _0xf5e5e9(0x228) ? _0xdf0a7f[_0xf5e5e9(0x20e)]() : _0xdf0a7f);
}

function a0_0x18aa() {
    const _0xf7a258 = ['__esModule', 'debugLogger', '__createBinding', 'existsSync', 'validateInput', 'bumpNumAllRequestsMade', 'warn', 'INTERNAL_ERROR', '__importDefault', 'setHeader', 'jwt', ']\x20validateInput', 'env', 'Response:\x20%O', 'name', 'message', 'Call\x20to\x20rapidsnark\x20service\x20failed\x20with\x20status\x20', 'prod', 'ProofCache', 'connect', ']\x20Invalid\x20bearer\x20token\x20or\x20env.BEARER_TOKENS\x20is\x20not\x20set', '15UIjOnn', 'use', ']\x20Bearer\x20token\x20matched!', ']\x20cache.inspect', 'Allowed\x20origins:\x20', 'BEARER_TOKENS', 'JSONToWalletInputs', 'cors', 'zkLogin:debug\x20should\x20not\x20be\x20enabled\x20in\x20production', 'time', 'skipWhitelist', 'Rapidsnark\x20service\x20uri:\x20', 'redis://127.0.0.1:6379', '[%s]\x20Request\x20took\x20', 'infoLogger', 'request-id', ']\x20cache.store', '89901qcwFPb', '5107141tkaVlP', 'startTime', 'Call\x20to\x20rapidsnark\x20service\x20failed', 'timeEnd', 'Whitelist:', 'post', 'Invalid\x20environment:\x20', 'listen', 'send', '[%s]\x20New\x20request:\x20%O', 'Call\x20to\x20rapidsnark\x20service\x20took\x20longer\x20than\x20', 'create', '58078GDVbHd', '15hdtOdr', 'inputs', '7EpRpdB', 'Redis\x20service\x20uri:\x20', 'pong\x0a', '190dRJgnK', 'getTime', '../src/circuitutils', 'enabled', 'release', 'js-yaml', 'pi_b', 'headers', ']\x20genZKLoginInputs', '5763294gVIwVE', 'race', 'defineProperty', 'PROVER_TIMEOUT', 'exit', 'groth16', 'dev', '__importStar', 'bumpNumRequestsSucceeded', 'ENVIRONMENT', 'protocol', 'process', 'argv', ']\x20Call\x20rapidsnark', '789877pgIThJ', 'default', 'TIMEOUT_ERROR', 'store', 'toString', 'Environment:\x20', 'stack', 'json', '13255352dnlBFX', 'bumpAudCounter', '../src/verify', 'Reading\x20whitelist', ']\x20Missing\x20bearer\x20token', 'Internal\x20error:\x20Expected\x20whitelist\x20to\x20be\x20non-null\x20if\x20skipWhitelist\x20is\x20false', '[%s]\x20Sending\x20response', 'call', 'inspect', 'POST', 'label', 'split', './whitelist.yaml', 'body', 'Missing\x20env\x20variable\x20BEARER_TOKENS', 'stringify', 'ALLOWED_ORIGINS', '5QcRfsi', 'Instrumentation', '../src/redis', 'node:fs', 'configurable', 'bigint', 'error', '144Bdocno', 'Protocol\x20is\x20expected\x20to\x20be\x20groth16\x20but\x20it\x20is\x20', '228884VimaaW', 'application/json', 'recordE2ETime', 'Server\x20is\x20listening\x20on\x20port\x20', 'HttpError', 'status', 'http://127.0.0.1:8080/input', 'utf8', '../src/common', 'pi_a'];
    a0_0x18aa = function() {
        return _0xf7a258;
    };
    return a0_0x18aa();
}
async function getProof(_0x29c71e, _0xff57 = Number(process_1[a0_0x335e0b(0x1c6)][a0_0x335e0b(0x1ff)] ?? 0xf)) {
    const _0x3b4560 = a0_0x335e0b,
        _0x441b89 = fetch(rapidsnark_service_uri, {
            'method': _0x3b4560(0x21b),
            'headers': {
                'Accept': _0x3b4560(0x1b1),
                'Content-Type': _0x3b4560(0x1b1)
            },
            'body': bigintStringify(_0x29c71e)
        }),
        _0x18abdd = new Promise((_0x709503, _0x41ec9f) => {
            setTimeout(() => {
                const _0x104f9d = a0_0x4f78;
                _0x41ec9f(new common_1['HttpError'](_0x104f9d(0x1eb) + _0xff57 + 's', common_1[_0x104f9d(0x20c)]));
            }, _0xff57 * 0x3e8);
        }),
        _0x37bce9 = await Promise[_0x3b4560(0x1fd)]([_0x441b89, _0x18abdd]);
    if (_0x37bce9 instanceof Response) {
        if (_0x37bce9['ok']) return _0x37bce9[_0x3b4560(0x211)]();
        else {
            (0x0, logger_1[_0x3b4560(0x1dd)])(_0x3b4560(0x1ca) + _0x37bce9[_0x3b4560(0x1b5)] + '\x20and\x20message\x20' + await _0x37bce9['text']());
            throw new common_1[(_0x3b4560(0x1b4))]('Call\x20to\x20rapidsnark\x20service\x20failed', common_1[_0x3b4560(0x1c1)]);
        }
    } else {
        (0x0, logger_1[_0x3b4560(0x1dd)])(_0x3b4560(0x1c7), _0x37bce9);
        throw new common_1['HttpError'](_0x3b4560(0x1e3), common_1[_0x3b4560(0x1c1)]);
    }
}

function recordSuccess(_0x4fd979, _0x314e61, _0x245517, _0x59acf7) {
    const _0x284b4e = a0_0x335e0b,
        _0x4c7cd6 = new Date()[_0x284b4e(0x1f4)]();
    (0x0, logger_1[_0x284b4e(0x1dd)])(_0x284b4e(0x1dc) + (_0x4c7cd6 - _0x4fd979) + 'ms', _0x245517), instr && (instr[_0x284b4e(0x213)](_0x314e61, _0x59acf7), instr[_0x284b4e(0x204)](), instr[_0x284b4e(0x1b2)](_0x4c7cd6 - _0x4fd979));
}

function initMiddleware(_0x511aab, _0x1cdfc3, _0x130a45) {
    const _0x28575d = a0_0x335e0b;
    _0x511aab[_0x28575d(0x1e2)] = new Date()[_0x28575d(0x1f4)]();
    const _0x5bca8e = _0x511aab[_0x28575d(0x1fa)][_0x28575d(0x1de)];
    _0x511aab['label'] = _0x5bca8e ?? String(_0x511aab[_0x28575d(0x1e2)]), process_1['env'][_0x28575d(0x205)] !== 'prod' ? _0x511aab[_0x28575d(0x1d9)] = !![] : _0x511aab[_0x28575d(0x1d9)] = ![], _0x1cdfc3[_0x28575d(0x1c3)]('Content-Type', _0x28575d(0x1b1)), _0x130a45();
}

function verifyBearerTokenMiddleware(_0x2958b6, _0x10fb89, _0x50cd04) {
    const _0x5a77e6 = a0_0x335e0b;
    try {
        const _0x25d268 = _0x2958b6[_0x5a77e6(0x21c)];
        if (process_1['env'][_0x5a77e6(0x205)] !== _0x5a77e6(0x1cb)) {
            _0x50cd04();
            return;
        }
        const _0x124ca6 = _0x2958b6['headers']['authorization'],
            _0x3fcb9f = _0x124ca6?.[_0x5a77e6(0x21d)]('\x20')[0x1];
        if (!_0x3fcb9f) {
            (0x0, logger_1[_0x5a77e6(0x1dd)])('[' + _0x25d268 + _0x5a77e6(0x216)), _0x50cd04();
            return;
        }
        if (!process_1['env'][_0x5a77e6(0x1d4)]?.[_0x5a77e6(0x21d)](',')['includes'](_0x3fcb9f)) {
            (0x0, logger_1[_0x5a77e6(0x1dd)])('[' + _0x25d268 + _0x5a77e6(0x1ce)), _0x50cd04();
            return;
        }(0x0, logger_1[_0x5a77e6(0x1dd)])('[' + _0x25d268 + _0x5a77e6(0x1d1)), _0x2958b6[_0x5a77e6(0x1d9)] = !![], _0x50cd04();
    } catch (_0x505997) {
        _0x50cd04(_0x505997);
    }
}
async function validateInputMiddleware(_0x56139c, _0x9a339a, _0x1ca8c8) {
    const _0x62feb4 = a0_0x335e0b;
    try {
        (0x0, logger_1['debugLogger'])(_0x62feb4(0x1ea), _0x56139c[_0x62feb4(0x21c)], _0x56139c[_0x62feb4(0x21f)]), _0x56139c['inputs'] = (0x0, verify_1[_0x62feb4(0x1d5)])(_0x56139c[_0x62feb4(0x21f)]);
        instr && instr[_0x62feb4(0x1bf)]();
        console['time']('[' + _0x56139c['label'] + _0x62feb4(0x1c5));
        if (!_0x56139c[_0x62feb4(0x1d9)] && WHITELISTED_AUDIENCES === null) throw new Error(_0x62feb4(0x217));
        await (0x0, verify_1[_0x62feb4(0x1be)])(_0x56139c, _0x56139c['skipWhitelist'] ? null : WHITELISTED_AUDIENCES), console['timeEnd']('[' + _0x56139c[_0x62feb4(0x21c)] + _0x62feb4(0x1c5)), instr && instr['bumpNumValidRequestsMade'](), _0x1ca8c8();
    } catch (_0x2d6904) {
        _0x1ca8c8(_0x2d6904);
    }
}

function a0_0x4f78(_0x393a32, _0x16d6b7) {
    const _0x18aa2b = a0_0x18aa();
    return a0_0x4f78 = function(_0x4f7898, _0x2169c8) {
        _0x4f7898 = _0x4f7898 - 0x1ae;
        let _0x49bcd5 = _0x18aa2b[_0x4f7898];
        return _0x49bcd5;
    }, a0_0x4f78(_0x393a32, _0x16d6b7);
}
async function cacheMiddleware(_0x2c818a, _0x366e30, _0x456b3e) {
    const _0x315cfe = a0_0x335e0b;
    try {
        const _0x4bcae5 = _0x2c818a[_0x315cfe(0x21c)];
        if (cache) {
            console[_0x315cfe(0x1d8)]('[' + _0x4bcae5 + ']\x20cache.inspect');
            const _0x3dadc2 = await cache[_0x315cfe(0x21a)](_0x2c818a[_0x315cfe(0x21f)], _0x4bcae5);
            console[_0x315cfe(0x1e4)]('[' + _0x4bcae5 + _0x315cfe(0x1d2));
            if (_0x3dadc2[0x0]) {
                instr && instr['bumpNumCacheHits']();
                (0x0, logger_1[_0x315cfe(0x1dd)])('[%s]\x20Sending\x20cached\x20response:\x20%o', _0x4bcae5, _0x3dadc2[0x1]), recordSuccess(_0x2c818a[_0x315cfe(0x1e2)], _0x2c818a[_0x315cfe(0x1ef)][_0x315cfe(0x1c4)], _0x4bcae5, _0x2c818a[_0x315cfe(0x1d9)]), _0x366e30[_0x315cfe(0x1e9)](_0x3dadc2[0x1]);
                return;
            }
        }
        _0x456b3e();
    } catch (_0x41fc6a) {
        _0x456b3e(_0x41fc6a);
    }
}
async function generateZKInputsMiddleware(_0x5d98f3, _0x76b151, _0x23b2b4) {
    const _0x214be6 = a0_0x335e0b;
    try {
        const _0x33f534 = _0x5d98f3[_0x214be6(0x21c)],
            _0x5db212 = _0x5d98f3[_0x214be6(0x1ef)];
        console['time']('[' + _0x33f534 + _0x214be6(0x1fb));
        const [_0x4ef867, _0x1069a4] = await (0x0, circuitutils_1['genZKLoginInputs'])(_0x5db212);
        console[_0x214be6(0x1e4)]('[' + _0x33f534 + _0x214be6(0x1fb)), console[_0x214be6(0x1d8)]('[' + _0x33f534 + _0x214be6(0x209));
        const _0x3b27c4 = new Date()['getTime'](),
            _0x119c5f = await getProof(_0x4ef867),
            _0x550efd = new Date()['getTime']();
        instr && instr['recordRapidsnarkTime'](_0x550efd - _0x3b27c4);
        console['timeEnd']('[' + _0x33f534 + ']\x20Call\x20rapidsnark');
        if (_0x119c5f[_0x214be6(0x206)] !== _0x214be6(0x201)) throw new Error(_0x214be6(0x1af) + _0x119c5f[_0x214be6(0x206)] + '\x0a' + JSON['stringify'](_0x119c5f));
        const _0x304c16 = (0x0, circuitutils_1['genZKLoginSign'])({
                'proofPoints': {
                    'a': _0x119c5f[_0x214be6(0x1b9)],
                    'b': _0x119c5f[_0x214be6(0x1f9)],
                    'c': _0x119c5f['pi_c']
                },
                'auxiliaryInputs': _0x1069a4
            }),
            _0x3cd4cd = bigintStringify(_0x304c16);
        cache && (console[_0x214be6(0x1d8)]('[' + _0x33f534 + _0x214be6(0x1df)), await cache[_0x214be6(0x20d)](_0x5d98f3[_0x214be6(0x21f)], _0x3cd4cd, _0x33f534), console[_0x214be6(0x1e4)]('[' + _0x33f534 + ']\x20cache.store')), recordSuccess(_0x5d98f3[_0x214be6(0x1e2)], _0x5db212['jwt'], _0x33f534, _0x5d98f3['skipWhitelist']), (0x0, logger_1[_0x214be6(0x1dd)])(_0x214be6(0x218), _0x33f534), (0x0, logger_1[_0x214be6(0x1bb)])('[%s]\x20Sending\x20response:\x20%o', _0x33f534, _0x304c16), _0x76b151[_0x214be6(0x1e9)](_0x3cd4cd);
    } catch (_0xdb2f8e) {
        _0x23b2b4(_0xdb2f8e);
    }
}
app['get']('/ping', (_0x29b650, _0x537b6d) => {
    const _0x11c00e = a0_0x335e0b;
    _0x537b6d[_0x11c00e(0x1e9)](_0x11c00e(0x1f2));
}), app[a0_0x335e0b(0x1e6)]('/v1', initMiddleware, verifyBearerTokenMiddleware, validateInputMiddleware, cacheMiddleware, generateZKInputsMiddleware), app[a0_0x335e0b(0x1d0)]((_0x55d05b, _0x2f3382, _0x327cd0, _0x1ecf49) => {
    const _0x4b9ff0 = a0_0x335e0b;
    console[_0x4b9ff0(0x229)]('[' + _0x2f3382[_0x4b9ff0(0x21c)] + ']', _0x55d05b);
    const _0x22662a = _0x55d05b['status'] ?? common_1[_0x4b9ff0(0x1c1)];
    process_1[_0x4b9ff0(0x1c6)]['ENVIRONMENT'] !== _0x4b9ff0(0x202) ? _0x327cd0[_0x4b9ff0(0x1b5)](_0x22662a)['json']({
        'name': _0x55d05b[_0x4b9ff0(0x1c8)],
        'message': _0x55d05b['message']
    }) : _0x327cd0[_0x4b9ff0(0x1b5)](_0x22662a)[_0x4b9ff0(0x211)]({
        'name': _0x55d05b[_0x4b9ff0(0x1c8)],
        'message': _0x55d05b[_0x4b9ff0(0x1c9)],
        'error': _0x55d05b,
        'stack': _0x55d05b[_0x4b9ff0(0x210)]
    });
}), app[a0_0x335e0b(0x1e8)](port, async () => {
    const _0x4c7247 = a0_0x335e0b;
    (0x0, logger_1[_0x4c7247(0x1dd)])(_0x4c7247(0x1b3) + port), (0x0, logger_1[_0x4c7247(0x1dd)])(_0x4c7247(0x1da) + rapidsnark_service_uri), (0x0, logger_1[_0x4c7247(0x1dd)])('Prover\x20timeout:\x20' + (process_1[_0x4c7247(0x1c6)][_0x4c7247(0x1ff)] ?? 0xf) + 's'), (0x0, logger_1['infoLogger'])(_0x4c7247(0x20f) + process_1[_0x4c7247(0x1c6)][_0x4c7247(0x205)]);
    process_1['env'][_0x4c7247(0x205)] === _0x4c7247(0x1cb) && logger_1['debugLogger'][_0x4c7247(0x1f6)] && (console[_0x4c7247(0x229)](_0x4c7247(0x1d7)), process[_0x4c7247(0x200)](0x1));
    logger_1[_0x4c7247(0x1bb)][_0x4c7247(0x1f6)] && console[_0x4c7247(0x1c0)]('NOTE:\x20zkLogin:debug\x20should\x20not\x20be\x20enabled\x20in\x20production');
    if (process_1['env']['ENVIRONMENT'] === _0x4c7247(0x1cb)) {
        const _0x1353c9 = readWhitelist();
        process_1[_0x4c7247(0x1c6)][_0x4c7247(0x1d4)] === undefined && (0x0, logger_1[_0x4c7247(0x1dd)])(_0x4c7247(0x220)), instr = new instrumentation_1[(_0x4c7247(0x224))](0x23e0, _0x1353c9), await initRedis();
    } else {
        if (process_1[_0x4c7247(0x1c6)][_0x4c7247(0x205)] === _0x4c7247(0x202)) instr = new instrumentation_1[(_0x4c7247(0x224))](0x23e0, null), await initRedis();
        else process_1['env']['ENVIRONMENT'] !== _0x4c7247(0x1f7) && (console[_0x4c7247(0x229)](_0x4c7247(0x1e7) + process_1[_0x4c7247(0x1c6)][_0x4c7247(0x205)] + '.\x20Only\x20supports\x20prod,\x20dev,\x20and\x20release.'), process[_0x4c7247(0x200)](0x1));
    }
});

function readWhitelist() {
    const _0x4a07d3 = a0_0x335e0b;
    (0x0, logger_1['infoLogger'])(_0x4a07d3(0x215));
    const _0x52d5d7 = _0x4a07d3(0x21e);
    return !(0x0, node_fs_1[_0x4a07d3(0x1bd)])(_0x52d5d7) && (console[_0x4a07d3(0x229)]('Whitelist\x20does\x20not\x20exist\x20at\x20' + _0x52d5d7), process[_0x4a07d3(0x200)](0x1)), WHITELISTED_AUDIENCES = yaml['load']((0x0, node_fs_1['readFileSync'])(_0x52d5d7, _0x4a07d3(0x1b7))), (0x0, logger_1[_0x4a07d3(0x1dd)])(_0x4a07d3(0x1e5), JSON['stringify'](WHITELISTED_AUDIENCES, null, 0x2)), WHITELISTED_AUDIENCES;
}
async function initRedis() {
    const _0x5173a3 = a0_0x335e0b,
        _0x3a568c = process_1[_0x5173a3(0x1c6)]['REDIS_URI'] ?? _0x5173a3(0x1db);
    (0x0, logger_1['infoLogger'])(_0x5173a3(0x1f1) + _0x3a568c), cache = new redis_1[(_0x5173a3(0x1cc))](_0x3a568c), await cache[_0x5173a3(0x1cd)]();
}