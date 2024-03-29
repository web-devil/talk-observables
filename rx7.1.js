/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/*
 *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
(function (m, w) {
    'object' === typeof exports && 'undefined' !== typeof module
        ? w(exports)
        : 'function' === typeof define && define.amd
        ? define('rxjs', ['exports'], w)
        : w((m.rxjs = {}));
})(this, function (m) {
    function w(b, a) {
        function c() {
            this.constructor = b;
        }
        if ('function' !== typeof a && null !== a)
            throw new TypeError(
                'Class extends value ' +
                    String(a) +
                    ' is not a constructor or null'
            );
        Ia(b, a);
        b.prototype =
            null === a
                ? Object.create(a)
                : ((c.prototype = a.prototype), new c());
    }
    function nb(b, a) {
        var c = {},
            d;
        for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) &&
                0 > a.indexOf(d) &&
                (c[d] = b[d]);
        if (null != b && 'function' === typeof Object.getOwnPropertySymbols) {
            var e = 0;
            for (d = Object.getOwnPropertySymbols(b); e < d.length; e++)
                0 > a.indexOf(d[e]) &&
                    Object.prototype.propertyIsEnumerable.call(b, d[e]) &&
                    (c[d[e]] = b[d[e]]);
        }
        return c;
    }
    function Jc(b, a, c, d) {
        function e(a) {
            return a instanceof c
                ? a
                : new c(function (b) {
                      b(a);
                  });
        }
        return new (c || (c = Promise))(function (c, g) {
            function f(a) {
                try {
                    n(d.next(a));
                } catch (z) {
                    g(z);
                }
            }
            function h(a) {
                try {
                    n(d['throw'](a));
                } catch (z) {
                    g(z);
                }
            }
            function n(a) {
                a.done ? c(a.value) : e(a.value).then(f, h);
            }
            n((d = d.apply(b, a || [])).next());
        });
    }
    function Ja(b, a) {
        function c(a) {
            return function (b) {
                return d([a, b]);
            };
        }
        function d(c) {
            if (f) throw new TypeError('Generator is already executing.');
            for (; e; )
                try {
                    if (
                        ((f = 1),
                        g &&
                            (k =
                                c[0] & 2
                                    ? g['return']
                                    : c[0]
                                    ? g['throw'] ||
                                      ((k = g['return']) && k.call(g), 0)
                                    : g.next) &&
                            !(k = k.call(g, c[1])).done)
                    )
                        return k;
                    if (((g = 0), k)) c = [c[0] & 2, k.value];
                    switch (c[0]) {
                        case 0:
                        case 1:
                            k = c;
                            break;
                        case 4:
                            return e.label++, { value: c[1], done: !1 };
                        case 5:
                            e.label++;
                            g = c[1];
                            c = [0];
                            continue;
                        case 7:
                            c = e.ops.pop();
                            e.trys.pop();
                            continue;
                        default:
                            if (
                                !((k = e.trys),
                                (k = 0 < k.length && k[k.length - 1])) &&
                                (6 === c[0] || 2 === c[0])
                            ) {
                                e = 0;
                                continue;
                            }
                            if (
                                3 === c[0] &&
                                (!k || (c[1] > k[0] && c[1] < k[3]))
                            )
                                e.label = c[1];
                            else if (6 === c[0] && e.label < k[1])
                                (e.label = k[1]), (k = c);
                            else if (k && e.label < k[2])
                                (e.label = k[2]), e.ops.push(c);
                            else {
                                k[2] && e.ops.pop();
                                e.trys.pop();
                                continue;
                            }
                    }
                    c = a.call(b, e);
                } catch (r) {
                    (c = [6, r]), (g = 0);
                } finally {
                    f = k = 0;
                }
            if (c[0] & 5) throw c[1];
            return { value: c[0] ? c[1] : void 0, done: !0 };
        }
        var e = {
                label: 0,
                sent: function () {
                    if (k[0] & 1) throw k[1];
                    return k[1];
                },
                trys: [],
                ops: [],
            },
            f,
            g,
            k,
            h;
        return (
            (h = { next: c(0), throw: c(1), return: c(2) }),
            'function' === typeof Symbol &&
                (h[Symbol.iterator] = function () {
                    return this;
                }),
            h
        );
    }
    function E(b) {
        var a = 'function' === typeof Symbol && Symbol.iterator,
            c = a && b[a],
            d = 0;
        if (c) return c.call(b);
        if (b && 'number' === typeof b.length)
            return {
                next: function () {
                    b && d >= b.length && (b = void 0);
                    return { value: b && b[d++], done: !b };
                },
            };
        throw new TypeError(
            a ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
        );
    }
    function x(b, a) {
        var c = 'function' === typeof Symbol && b[Symbol.iterator];
        if (!c) return b;
        b = c.call(b);
        var d,
            e = [],
            f;
        try {
            for (; (void 0 === a || 0 < a--) && !(d = b.next()).done; )
                e.push(d.value);
        } catch (g) {
            f = { error: g };
        } finally {
            try {
                d && !d.done && (c = b['return']) && c.call(b);
            } finally {
                if (f) throw f.error;
            }
        }
        return e;
    }
    function y(b, a) {
        for (var c = 0, d = a.length, e = b.length; c < d; c++, e++)
            b[e] = a[c];
        return b;
    }
    function Y(b) {
        return this instanceof Y ? ((this.v = b), this) : new Y(b);
    }
    function Kc(b, a, c) {
        function d(a) {
            h[a] &&
                (n[a] = function (c) {
                    return new Promise(function (b, d) {
                        1 < r.push([a, c, b, d]) || e(a, c);
                    });
                });
        }
        function e(a, c) {
            try {
                var b = h[a](c);
                b.value instanceof Y
                    ? Promise.resolve(b.value.v).then(f, g)
                    : k(r[0][2], b);
            } catch (Z) {
                k(r[0][3], Z);
            }
        }
        function f(a) {
            e('next', a);
        }
        function g(a) {
            e('throw', a);
        }
        function k(a, c) {
            (a(c), r.shift(), r.length) && e(r[0][0], r[0][1]);
        }
        if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
        var h = c.apply(b, a || []),
            n,
            r = [];
        return (
            (n = {}),
            d('next'),
            d('throw'),
            d('return'),
            (n[Symbol.asyncIterator] = function () {
                return this;
            }),
            n
        );
    }
    function Lc(b) {
        function a(a) {
            e[a] =
                b[a] &&
                function (d) {
                    return new Promise(function (e, f) {
                        d = b[a](d);
                        c(e, f, d.done, d.value);
                    });
                };
        }
        function c(a, c, b, d) {
            Promise.resolve(d).then(function (c) {
                a({ value: c, done: b });
            }, c);
        }
        if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
        var d = b[Symbol.asyncIterator],
            e;
        return d
            ? d.call(b)
            : ((b = 'function' === typeof E ? E(b) : b[Symbol.iterator]()),
              (e = {}),
              a('next'),
              a('throw'),
              a('return'),
              (e[Symbol.asyncIterator] = function () {
                  return this;
              }),
              e);
    }
    function q(b) {
        return 'function' === typeof b;
    }
    function P(b) {
        b = b(function (a) {
            Error.call(a);
            a.stack = Error().stack;
        });
        b.prototype = Object.create(Error.prototype);
        return (b.prototype.constructor = b);
    }
    function K(b, a) {
        b && ((a = b.indexOf(a)), 0 <= a && b.splice(a, 1));
    }
    function ob(b) {
        return (
            b instanceof A ||
            (b && 'closed' in b && q(b.remove) && q(b.add) && q(b.unsubscribe))
        );
    }
    function pb(b) {
        aa.setTimeout(function () {
            var a = S.onUnhandledError;
            if (a) a(b);
            else throw b;
        });
    }
    function B() {}
    function G(b, a, c) {
        return { kind: b, value: a, error: c };
    }
    function Ka(b, a) {
        return function () {
            for (var c = [], d = 0; d < arguments.length; d++)
                c[d] = arguments[d];
            try {
                b.apply(void 0, y([], x(c)));
            } catch (e) {
                if (S.useDeprecatedSynchronousErrorHandling)
                    if (a._syncErrorHack_isSubscribing) a.__syncError = e;
                    else throw e;
                else pb(e);
            }
        };
    }
    function qb(b) {
        throw b;
    }
    function La(b, a) {
        var c = S.onStoppedNotification;
        c &&
            aa.setTimeout(function () {
                return c(b, a);
            });
    }
    function D(b) {
        return b;
    }
    function Ma() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return rb(b);
    }
    function rb(b) {
        return 0 === b.length
            ? D
            : 1 === b.length
            ? b[0]
            : function (a) {
                  return b.reduce(function (a, b) {
                      return b(a);
                  }, a);
              };
    }
    function sb(b) {
        var a;
        return null !== (a = null !== b && void 0 !== b ? b : S.Promise) &&
            void 0 !== a
            ? a
            : Promise;
    }
    function p(b) {
        return function (a) {
            if (q(null === a || void 0 === a ? void 0 : a.lift))
                return a.lift(function (a) {
                    try {
                        return b(a, this);
                    } catch (d) {
                        this.error(d);
                    }
                });
            throw new TypeError('Unable to lift unknown Observable type');
        };
    }
    function tb() {
        return p(function (b, a) {
            var c = null;
            b._refCount++;
            var d = new l(a, void 0, void 0, void 0, function () {
                if (!b || 0 >= b._refCount || 0 < --b._refCount) c = null;
                else {
                    var d = b._connection,
                        f = c;
                    c = null;
                    !d || (f && d !== f) || d.unsubscribe();
                    a.unsubscribe();
                }
            });
            b.subscribe(d);
            d.closed || (c = b.connect());
        });
    }
    function ub(b) {
        var a = Q.schedule;
        return new u(function (c) {
            var d = new A(),
                e = b || wa,
                f = e.now(),
                g = function (k) {
                    var h = e.now();
                    c.next({ timestamp: b ? h : k, elapsed: h - f });
                    c.closed || d.add(a(g));
                };
            d.add(a(g));
            return d;
        });
    }
    function vb(b) {
        return b in Na ? (delete Na[b], !0) : !1;
    }
    function Mc(b) {
        return new u(function (a) {
            return b.schedule(function () {
                return a.complete();
            });
        });
    }
    function Oa(b, a) {
        return new u(function (c) {
            var d = 0;
            return a.schedule(function () {
                d === b.length
                    ? c.complete()
                    : (c.next(b[d++]), c.closed || this.schedule());
            });
        });
    }
    function Nc(b, a) {
        return new u(function (c) {
            var d = new A();
            d.add(
                a.schedule(function () {
                    var e = b[ba]();
                    d.add(
                        e.subscribe({
                            next: function (b) {
                                d.add(
                                    a.schedule(function () {
                                        return c.next(b);
                                    })
                                );
                            },
                            error: function (b) {
                                d.add(
                                    a.schedule(function () {
                                        return c.error(b);
                                    })
                                );
                            },
                            complete: function () {
                                d.add(
                                    a.schedule(function () {
                                        return c.complete();
                                    })
                                );
                            },
                        })
                    );
                })
            );
            return d;
        });
    }
    function Oc(b, a) {
        return new u(function (c) {
            return a.schedule(function () {
                return b.then(
                    function (b) {
                        c.add(
                            a.schedule(function () {
                                c.next(b);
                                c.add(
                                    a.schedule(function () {
                                        return c.complete();
                                    })
                                );
                            })
                        );
                    },
                    function (b) {
                        c.add(
                            a.schedule(function () {
                                return c.error(b);
                            })
                        );
                    }
                );
            });
        });
    }
    function wb(b, a, c, d) {
        void 0 === d && (d = 0);
        a = a.schedule(function () {
            try {
                c.call(this);
            } catch (e) {
                b.error(e);
            }
        }, d);
        b.add(a);
        return a;
    }
    function xb(b, a) {
        return new u(function (c) {
            var d;
            c.add(
                a.schedule(function () {
                    d = b[Pa]();
                    wb(c, a, function () {
                        var a = d.next(),
                            b = a.value;
                        a.done ? c.complete() : (c.next(b), this.schedule());
                    });
                })
            );
            return function () {
                return (
                    q(null === d || void 0 === d ? void 0 : d.return) &&
                    d.return()
                );
            };
        });
    }
    function yb(b, a) {
        if (!b) throw Error('Iterable cannot be null');
        return new u(function (c) {
            var d = new A();
            d.add(
                a.schedule(function () {
                    var e = b[Symbol.asyncIterator]();
                    d.add(
                        a.schedule(function () {
                            var a = this;
                            e.next().then(function (b) {
                                b.done
                                    ? c.complete()
                                    : (c.next(b.value), a.schedule());
                            });
                        })
                    );
                })
            );
            return d;
        });
    }
    function zb(b) {
        return q(null === b || void 0 === b ? void 0 : b[Pa]);
    }
    function Ab(b) {
        return (
            Symbol.asyncIterator &&
            q(null === b || void 0 === b ? void 0 : b[Symbol.asyncIterator])
        );
    }
    function Bb(b) {
        return new TypeError(
            'You provided ' +
                (null !== b && 'object' === typeof b
                    ? 'an invalid object'
                    : "'" + b + "'") +
                ' where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.'
        );
    }
    function Cb(b) {
        return Kc(this, arguments, function () {
            var a, c, d, e;
            return Ja(this, function (f) {
                switch (f.label) {
                    case 0:
                        (a = b.getReader()), (f.label = 1);
                    case 1:
                        f.trys.push([1, , 9, 10]), (f.label = 2);
                    case 2:
                        return [4, Y(a.read())];
                    case 3:
                        return (
                            (c = f.sent()),
                            (d = c.value),
                            (e = c.done) ? [4, Y(void 0)] : [3, 5]
                        );
                    case 4:
                        return [2, f.sent()];
                    case 5:
                        return [4, Y(d)];
                    case 6:
                        return [4, f.sent()];
                    case 7:
                        return f.sent(), [3, 2];
                    case 8:
                        return [3, 10];
                    case 9:
                        return a.releaseLock(), [7];
                    case 10:
                        return [2];
                }
            });
        });
    }
    function Db(b, a) {
        if (null != b) {
            if (q(b[ba])) return Nc(b, a);
            if (Qa(b)) return Oa(b, a);
            if (q(null === b || void 0 === b ? void 0 : b.then))
                return Oc(b, a);
            if (Ab(b)) return yb(b, a);
            if (zb(b)) return xb(b, a);
            if (q(null === b || void 0 === b ? void 0 : b.getReader))
                return yb(Cb(b), a);
        }
        throw Bb(b);
    }
    function ca(b, a) {
        return a ? Db(b, a) : v(b);
    }
    function v(b) {
        if (b instanceof u) return b;
        if (null != b) {
            if (q(b[ba])) return Pc(b);
            if (Qa(b)) return Eb(b);
            if (q(null === b || void 0 === b ? void 0 : b.then)) return Qc(b);
            if (Ab(b)) return Fb(b);
            if (zb(b)) return Rc(b);
            if (q(null === b || void 0 === b ? void 0 : b.getReader))
                return Fb(Cb(b));
        }
        throw Bb(b);
    }
    function Pc(b) {
        return new u(function (a) {
            var c = b[ba]();
            if (q(c.subscribe)) return c.subscribe(a);
            throw new TypeError(
                'Provided object does not correctly implement Symbol.observable'
            );
        });
    }
    function Eb(b) {
        return new u(function (a) {
            for (var c = 0; c < b.length && !a.closed; c++) a.next(b[c]);
            a.complete();
        });
    }
    function Qc(b) {
        return new u(function (a) {
            b.then(
                function (b) {
                    a.closed || (a.next(b), a.complete());
                },
                function (b) {
                    return a.error(b);
                }
            ).then(null, pb);
        });
    }
    function Rc(b) {
        return new u(function (a) {
            var c, d;
            try {
                for (var e = E(b), f = e.next(); !f.done; f = e.next())
                    if ((a.next(f.value), a.closed)) return;
            } catch (g) {
                c = { error: g };
            } finally {
                try {
                    f && !f.done && (d = e.return) && d.call(e);
                } finally {
                    if (c) throw c.error;
                }
            }
            a.complete();
        });
    }
    function Fb(b) {
        return new u(function (a) {
            Sc(b, a).catch(function (b) {
                return a.error(b);
            });
        });
    }
    function Sc(b, a) {
        var c, d, e, f;
        return Jc(this, void 0, void 0, function () {
            var g, k;
            return Ja(this, function (h) {
                switch (h.label) {
                    case 0:
                        h.trys.push([0, 5, 6, 11]), (c = Lc(b)), (h.label = 1);
                    case 1:
                        return [4, c.next()];
                    case 2:
                        if (((d = h.sent()), d.done)) return [3, 4];
                        g = d.value;
                        a.next(g);
                        if (a.closed) return [2];
                        h.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        return [3, 11];
                    case 5:
                        return (k = h.sent()), (e = { error: k }), [3, 11];
                    case 6:
                        return (
                            h.trys.push([6, , 9, 10]),
                            d && !d.done && (f = c.return)
                                ? [4, f.call(c)]
                                : [3, 8]
                        );
                    case 7:
                        h.sent(), (h.label = 8);
                    case 8:
                        return [3, 10];
                    case 9:
                        if (e) throw e.error;
                        return [7];
                    case 10:
                        return [7];
                    case 11:
                        return a.complete(), [2];
                }
            });
        });
    }
    function da(b, a) {
        return a ? Oa(b, a) : Eb(b);
    }
    function xa(b) {
        return b && q(b.schedule);
    }
    function ja(b) {
        return q(b[b.length - 1]) ? b.pop() : void 0;
    }
    function L(b) {
        return xa(b[b.length - 1]) ? b.pop() : void 0;
    }
    function Ra() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return (a = L(b)) ? Oa(b, a) : da(b);
    }
    function Gb(b, a) {
        var c = q(b)
                ? b
                : function () {
                      return b;
                  },
            d = function (a) {
                return a.error(c());
            };
        return new u(
            a
                ? function (b) {
                      return a.schedule(d, 0, b);
                  }
                : d
        );
    }
    function ya(b, a) {
        var c,
            d,
            e,
            f = b.kind,
            g = b.value;
        b = b.error;
        if ('string' !== typeof f)
            throw new TypeError('Invalid notification, missing "kind"');
        'N' === f
            ? null === (c = a.next) || void 0 === c
                ? void 0
                : c.call(a, g)
            : 'E' === f
            ? null === (d = a.error) || void 0 === d
                ? void 0
                : d.call(a, b)
            : null === (e = a.complete) || void 0 === e
            ? void 0
            : e.call(a);
    }
    function Sa(b) {
        return b instanceof Date && !isNaN(b);
    }
    function Hb(b, a) {
        b = Sa(b) ? { first: b } : 'number' === typeof b ? { each: b } : b;
        var c = b.first,
            d = b.each,
            e = b.with,
            f = void 0 === e ? Tc : e,
            e = b.scheduler,
            g = void 0 === e ? (null !== a && void 0 !== a ? a : J) : e;
        a = b.meta;
        var k = void 0 === a ? null : a;
        if (null == c && null == d) throw new TypeError('No timeout provided.');
        return p(function (a, b) {
            var e,
                h,
                n = null,
                F = 0,
                Z = function (a) {
                    h = wb(
                        b,
                        g,
                        function () {
                            e.unsubscribe();
                            v(f({ meta: k, lastValue: n, seen: F })).subscribe(
                                b
                            );
                        },
                        a
                    );
                };
            e = a.subscribe(
                new l(
                    b,
                    function (a) {
                        null === h || void 0 === h ? void 0 : h.unsubscribe();
                        F++;
                        b.next((n = a));
                        0 < d && Z(d);
                    },
                    void 0,
                    void 0,
                    function () {
                        (null === h || void 0 === h ? 0 : h.closed) ||
                            (null === h || void 0 === h
                                ? void 0
                                : h.unsubscribe());
                        n = null;
                    }
                )
            );
            Z(null != c ? ('number' === typeof c ? c : +c - g.now()) : d);
        });
    }
    function Tc(b) {
        throw new Ib(b);
    }
    function Jb(b, a) {
        void 0 === a && (a = 0);
        return p(function (c, d) {
            d.add(
                b.schedule(function () {
                    return c.subscribe(d);
                }, a)
            );
        });
    }
    function M(b, a) {
        return p(function (c, d) {
            var e = 0;
            c.subscribe(
                new l(d, function (c) {
                    d.next(b.call(a, c, e++));
                })
            );
        });
    }
    function T(b) {
        return M(function (a) {
            return Uc(a) ? b.apply(void 0, y([], x(a))) : b(a);
        });
    }
    function Kb(b, a) {
        void 0 === a && (a = 0);
        return p(function (c, d) {
            c.subscribe(
                new l(
                    d,
                    function (c) {
                        return d.add(
                            b.schedule(function () {
                                return d.next(c);
                            }, a)
                        );
                    },
                    function () {
                        return d.add(
                            b.schedule(function () {
                                return d.complete();
                            }, a)
                        );
                    },
                    function (c) {
                        return d.add(
                            b.schedule(function () {
                                return d.error(c);
                            }, a)
                        );
                    }
                )
            );
        });
    }
    function Aa(b, a, c, d) {
        if (c)
            if (xa(c)) d = c;
            else
                return function () {
                    for (var e = [], f = 0; f < arguments.length; f++)
                        e[f] = arguments[f];
                    return Aa(b, a, d).apply(this, e).pipe(T(c));
                };
        return d
            ? function () {
                  for (var c = [], f = 0; f < arguments.length; f++)
                      c[f] = arguments[f];
                  return Aa(b, a).apply(this, c).pipe(Jb(d), Kb(d));
              }
            : function () {
                  for (var c = this, d = [], g = 0; g < arguments.length; g++)
                      d[g] = arguments[g];
                  var k = new Ta(),
                      h = !0;
                  return new u(function (e) {
                      e = k.subscribe(e);
                      if (h) {
                          var f = (h = !1),
                              g = !1;
                          a.apply(
                              c,
                              y(y([], x(d)), [
                                  function () {
                                      for (
                                          var a = [], c = 0;
                                          c < arguments.length;
                                          c++
                                      )
                                          a[c] = arguments[c];
                                      if (b && ((c = a.shift()), null != c)) {
                                          k.error(c);
                                          return;
                                      }
                                      k.next(1 < a.length ? a : a[0]);
                                      g = !0;
                                      f && k.complete();
                                  },
                              ])
                          );
                          g && k.complete();
                          f = !0;
                      }
                      return e;
                  });
              };
    }
    function Lb(b) {
        if (1 === b.length) {
            var a = b[0];
            if (Vc(a)) return { args: a, keys: null };
            if (a && 'object' === typeof a && Wc(a) === Xc)
                return (
                    (b = Yc(a)),
                    {
                        args: b.map(function (b) {
                            return a[b];
                        }),
                        keys: b,
                    }
                );
        }
        return { args: b, keys: null };
    }
    function Mb(b, a) {
        return b.reduce(function (b, d, e) {
            return (b[d] = a[e]), b;
        }, {});
    }
    function Nb() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = L(b),
            a = ja(b),
            b = Lb(b),
            d = b.args,
            e = b.keys;
        if (0 === d.length) return ca([], c);
        c = new u(
            Ob(
                d,
                c,
                e
                    ? function (a) {
                          return Mb(e, a);
                      }
                    : D
            )
        );
        return a ? c.pipe(T(a)) : c;
    }
    function Ob(b, a, c) {
        void 0 === c && (c = D);
        return function (d) {
            Pb(
                a,
                function () {
                    for (
                        var e = b.length,
                            f = Array(e),
                            g = e,
                            k = e,
                            h = function (e) {
                                Pb(
                                    a,
                                    function () {
                                        var h = !1;
                                        ca(b[e], a).subscribe(
                                            new l(
                                                d,
                                                function (a) {
                                                    f[e] = a;
                                                    h || ((h = !0), k--);
                                                    k || d.next(c(f.slice()));
                                                },
                                                function () {
                                                    --g || d.complete();
                                                }
                                            )
                                        );
                                    },
                                    d
                                );
                            },
                            n = 0;
                        n < e;
                        n++
                    )
                        h(n);
                },
                d
            );
        };
    }
    function Pb(b, a, c) {
        b ? c.add(b.schedule(a)) : a();
    }
    function Ua(b, a, c, d, e, f, g, k) {
        var h = [],
            n = 0,
            r = 0,
            z = !1,
            t = function (a) {
                return n < d ? F(a) : h.push(a);
            },
            F = function (b) {
                f && a.next(b);
                n++;
                var k = !1;
                v(c(b, r++)).subscribe(
                    new l(
                        a,
                        function (b) {
                            null === e || void 0 === e ? void 0 : e(b);
                            f ? t(b) : a.next(b);
                        },
                        function () {
                            k = !0;
                        },
                        void 0,
                        function () {
                            if (k)
                                try {
                                    n--;
                                    for (
                                        var b = function () {
                                            var b = h.shift();
                                            g
                                                ? a.add(
                                                      g.schedule(function () {
                                                          return F(b);
                                                      })
                                                  )
                                                : F(b);
                                        };
                                        h.length && n < d;

                                    )
                                        b();
                                    !z || h.length || n || a.complete();
                                } catch (N) {
                                    a.error(N);
                                }
                        }
                    )
                );
            };
        b.subscribe(
            new l(a, t, function () {
                z = !0;
                !z || h.length || n || a.complete();
            })
        );
        return function () {
            null === k || void 0 === k ? void 0 : k();
        };
    }
    function H(b, a, c) {
        void 0 === c && (c = Infinity);
        if (q(a))
            return H(function (c, e) {
                return M(function (b, d) {
                    return a(c, b, e, d);
                })(v(b(c, e)));
            }, c);
        'number' === typeof a && (c = a);
        return p(function (a, e) {
            return Ua(a, e, b, c);
        });
    }
    function Ba(b) {
        void 0 === b && (b = Infinity);
        return H(D, b);
    }
    function Va() {
        return Ba(1);
    }
    function ka() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return Va()(da(b, L(b)));
    }
    function la(b) {
        return new u(function (a) {
            v(b()).subscribe(a);
        });
    }
    function Wa(b, a, c, d) {
        q(c) && ((d = c), (c = void 0));
        if (d) return Wa(b, a, c).pipe(T(d));
        d = x(
            Zc(b)
                ? $c.map(function (d) {
                      return function (e) {
                          return b[d](a, e, c);
                      };
                  })
                : ad(b)
                ? bd.map(Qb(b, a))
                : cd(b)
                ? dd.map(Qb(b, a))
                : [],
            2
        );
        var e = d[0],
            f = d[1];
        if (!e && Qa(b))
            return H(function (b) {
                return Wa(b, a, c);
            })(da(b));
        if (!e) throw new TypeError('Invalid event target');
        return new u(function (a) {
            var b = function () {
                for (var b = [], c = 0; c < arguments.length; c++)
                    b[c] = arguments[c];
                return a.next(1 < b.length ? b : b[0]);
            };
            e(b);
            return function () {
                return f(b);
            };
        });
    }
    function Qb(b, a) {
        return function (c) {
            return function (d) {
                return b[c](a, d);
            };
        };
    }
    function ad(b) {
        return q(b.addListener) && q(b.removeListener);
    }
    function cd(b) {
        return q(b.on) && q(b.off);
    }
    function Zc(b) {
        return q(b.addEventListener) && q(b.removeEventListener);
    }
    function Rb(b, a, c) {
        return c
            ? Rb(b, a).pipe(T(c))
            : new u(function (c) {
                  var d = function () {
                          for (var a = [], b = 0; b < arguments.length; b++)
                              a[b] = arguments[b];
                          return c.next(1 === a.length ? a[0] : a);
                      },
                      f = b(d);
                  return q(a)
                      ? function () {
                            return a(d, f);
                        }
                      : void 0;
              });
    }
    function ma(b, a, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = na);
        var d = -1;
        null != a && (xa(a) ? (c = a) : (d = a));
        return new u(function (a) {
            var e = Sa(b) ? +b - c.now() : b;
            0 > e && (e = 0);
            var g = 0;
            return c.schedule(function () {
                a.closed ||
                    (a.next(g++),
                    0 <= d ? this.schedule(void 0, d) : a.complete());
            }, e);
        });
    }
    function Sb(b, a) {
        void 0 === b && (b = 0);
        void 0 === a && (a = J);
        0 > b && (b = 0);
        return ma(b, b, a);
    }
    function U(b) {
        return 1 === b.length && ed(b[0]) ? b[0] : b;
    }
    function Tb() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = U(b);
        return p(function (a, b) {
            var d = y([a], x(c)),
                e = function () {
                    if (!b.closed)
                        if (0 < d.length) {
                            var a = void 0;
                            try {
                                a = v(d.shift());
                            } catch (n) {
                                e();
                                return;
                            }
                            var c = new l(b, void 0, B, B);
                            b.add(a.subscribe(c));
                            c.add(e);
                        } else b.complete();
                };
            e();
        });
    }
    function Ub(b, a) {
        return function (c, d) {
            return !b.call(a, c, d);
        };
    }
    function O(b, a) {
        return p(function (c, d) {
            var e = 0;
            c.subscribe(
                new l(d, function (c) {
                    return b.call(a, c, e++) && d.next(c);
                })
            );
        });
    }
    function Vb(b) {
        return function (a) {
            for (
                var c = [],
                    d = function (d) {
                        c.push(
                            v(b[d]).subscribe(
                                new l(a, function (b) {
                                    if (c) {
                                        for (var e = 0; e < c.length; e++)
                                            e !== d && c[e].unsubscribe();
                                        c = null;
                                    }
                                    a.next(b);
                                })
                            )
                        );
                    },
                    e = 0;
                c && !a.closed && e < b.length;
                e++
            )
                d(e);
        };
    }
    function Xa() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = ja(b),
            d = U(b);
        return d.length
            ? new u(function (a) {
                  var b = d.map(function () {
                          return [];
                      }),
                      e = d.map(function () {
                          return !1;
                      });
                  a.add(function () {
                      b = e = null;
                  });
                  for (
                      var k = function (f) {
                              v(d[f]).subscribe(
                                  new l(
                                      a,
                                      function (d) {
                                          b[f].push(d);
                                          b.every(function (a) {
                                              return a.length;
                                          }) &&
                                              ((d = b.map(function (a) {
                                                  return a.shift();
                                              })),
                                              a.next(
                                                  c
                                                      ? c.apply(
                                                            void 0,
                                                            y([], x(d))
                                                        )
                                                      : d
                                              ),
                                              b.some(function (a, b) {
                                                  return !a.length && e[b];
                                              }) && a.complete());
                                      },
                                      function () {
                                          e[f] = !0;
                                          !b[f].length && a.complete();
                                      }
                                  )
                              );
                          },
                          h = 0;
                      !a.closed && h < d.length;
                      h++
                  )
                      k(h);
                  return function () {
                      b = e = null;
                  };
              })
            : I;
    }
    function Wb(b) {
        return p(function (a, c) {
            var d = !1,
                e = null,
                f = null,
                g = !1,
                k = function () {
                    null === f || void 0 === f ? void 0 : f.unsubscribe();
                    f = null;
                    if (d) {
                        d = !1;
                        var a = e;
                        e = null;
                        c.next(a);
                    }
                    g && c.complete();
                },
                h = function () {
                    f = null;
                    g && c.complete();
                };
            a.subscribe(
                new l(
                    c,
                    function (a) {
                        d = !0;
                        e = a;
                        f || v(b(a)).subscribe((f = new l(c, k, h)));
                    },
                    function () {
                        g = !0;
                        (d && f && !f.closed) || c.complete();
                    }
                )
            );
        });
    }
    function Xb(b) {
        return p(function (a, c) {
            var d = null,
                e = !1,
                f,
                d = a.subscribe(
                    new l(c, void 0, void 0, function (g) {
                        f = v(b(g, Xb(b)(a)));
                        d
                            ? (d.unsubscribe(), (d = null), f.subscribe(c))
                            : (e = !0);
                    })
                );
            e && (d.unsubscribe(), (d = null), f.subscribe(c));
        });
    }
    function Yb(b, a, c, d, e) {
        return function (f, g) {
            var k = c,
                h = a,
                n = 0;
            f.subscribe(
                new l(
                    g,
                    function (a) {
                        var c = n++;
                        h = k ? b(h, a, c) : ((k = !0), a);
                        d && g.next(h);
                    },
                    e &&
                        function () {
                            k && g.next(h);
                            g.complete();
                        }
                )
            );
        };
    }
    function oa(b, a) {
        return p(Yb(b, a, 2 <= arguments.length, !1, !0));
    }
    function Zb() {
        return p(function (b, a) {
            oa(fd, [])(b).subscribe(a);
        });
    }
    function $b(b, a) {
        return Ma(
            Zb(),
            H(function (a) {
                return b(a);
            }),
            a ? T(a) : D
        );
    }
    function ac(b) {
        return $b(Nb, b);
    }
    function Ya() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return (a = ja(b))
            ? Ma(Ya.apply(void 0, y([], x(b))), T(a))
            : p(function (a, d) {
                  Ob(y([a], x(U(b))))(d);
              });
    }
    function bc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = L(b);
        return p(function (a, e) {
            Va()(da(y([a], x(b)), c)).subscribe(e);
        });
    }
    function Za(b, a) {
        return q(a) ? H(b, a, 1) : H(b, 1);
    }
    function gd(b) {
        return new u(function (a) {
            return b.subscribe(a);
        });
    }
    function $a(b, a) {
        void 0 === a && (a = hd);
        var c = a.connector;
        return p(function (a, e) {
            var d = c();
            ca(b(gd(d))).subscribe(e);
            e.add(a.subscribe(d));
        });
    }
    function Ca(b) {
        return p(function (a, c) {
            var d = !1;
            a.subscribe(
                new l(
                    c,
                    function (a) {
                        d = !0;
                        c.next(a);
                    },
                    function () {
                        d || c.next(b);
                        c.complete();
                    }
                )
            );
        });
    }
    function ea(b) {
        return 0 >= b
            ? function () {
                  return I;
              }
            : p(function (a, c) {
                  var d = 0;
                  a.subscribe(
                      new l(c, function (a) {
                          ++d <= b && (c.next(a), b <= d && c.complete());
                      })
                  );
              });
    }
    function cc() {
        return p(function (b, a) {
            b.subscribe(new l(a, B));
        });
    }
    function dc(b) {
        return M(function () {
            return b;
        });
    }
    function ab(b, a) {
        return a
            ? function (c) {
                  return ka(a.pipe(ea(1), cc()), c.pipe(ab(b)));
              }
            : H(function (a, d) {
                  return b(a, d).pipe(ea(1), dc(a));
              });
    }
    function ec(b, a) {
        void 0 === a && (a = D);
        b = null !== b && void 0 !== b ? b : id;
        return p(function (c, d) {
            var e,
                f = !0;
            c.subscribe(
                new l(d, function (c) {
                    var g = a(c);
                    if (f || !b(e, g)) (f = !1), (e = g), d.next(c);
                })
            );
        });
    }
    function id(b, a) {
        return b === a;
    }
    function Da(b) {
        void 0 === b && (b = jd);
        return p(function (a, c) {
            var d = !1;
            a.subscribe(
                new l(
                    c,
                    function (a) {
                        d = !0;
                        c.next(a);
                    },
                    function () {
                        return d ? c.complete() : c.error(b());
                    }
                )
            );
        });
    }
    function jd() {
        return new V();
    }
    function fc() {
        return p(function (b, a) {
            var c = !1,
                d = null;
            b.subscribe(
                new l(
                    a,
                    function (b) {
                        d ||
                            (d = v(b).subscribe(
                                new l(a, void 0, function () {
                                    d = null;
                                    c && a.complete();
                                })
                            ));
                    },
                    function () {
                        c = !0;
                        !d && a.complete();
                    }
                )
            );
        });
    }
    function gc(b, a) {
        return a
            ? function (c) {
                  return c.pipe(
                      gc(function (c, e) {
                          return v(b(c, e)).pipe(
                              M(function (b, d) {
                                  return a(c, b, e, d);
                              })
                          );
                      })
                  );
              }
            : p(function (a, d) {
                  var c = 0,
                      f = null,
                      g = !1;
                  a.subscribe(
                      new l(
                          d,
                          function (a) {
                              f ||
                                  ((f = new l(d, void 0, function () {
                                      f = null;
                                      g && d.complete();
                                  })),
                                  v(b(a, c++)).subscribe(f));
                          },
                          function () {
                              g = !0;
                              !f && d.complete();
                          }
                      )
                  );
              });
    }
    function hc(b, a, c) {
        var d = 'index' === c;
        return function (c, f) {
            var e = 0;
            c.subscribe(
                new l(
                    f,
                    function (g) {
                        var k = e++;
                        b.call(a, g, k, c) && (f.next(d ? k : g), f.complete());
                    },
                    function () {
                        f.next(d ? -1 : void 0);
                        f.complete();
                    }
                )
            );
        };
    }
    function ic(b) {
        return 0 >= b
            ? function () {
                  return I;
              }
            : p(function (a, c) {
                  var d = [];
                  a.subscribe(
                      new l(
                          c,
                          function (a) {
                              d.push(a);
                              b < d.length && d.shift();
                          },
                          function () {
                              var a, b;
                              try {
                                  for (
                                      var g = E(d), k = g.next();
                                      !k.done;
                                      k = g.next()
                                  )
                                      c.next(k.value);
                              } catch (h) {
                                  a = { error: h };
                              } finally {
                                  try {
                                      k &&
                                          !k.done &&
                                          (b = g.return) &&
                                          b.call(g);
                                  } finally {
                                      if (a) throw a.error;
                                  }
                              }
                              c.complete();
                          },
                          void 0,
                          function () {
                              d = null;
                          }
                      )
                  );
              });
    }
    function jc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = L(b),
            d = 'number' === typeof b[b.length - 1] ? b.pop() : Infinity,
            b = U(b);
        return p(function (a, f) {
            Ba(d)(da(y([a], x(b)), c)).subscribe(f);
        });
    }
    function bb(b, a) {
        var c = q(b)
            ? b
            : function () {
                  return b;
              };
        return q(a)
            ? $a(a, { connector: c })
            : function (a) {
                  return new Ea(a, c);
              };
    }
    function kc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return b.length
            ? p(function (a, d) {
                  Vb(y([a], x(b)))(d);
              })
            : D;
    }
    function lc(b) {
        return p(function (a, c) {
            var d = !1,
                e = null;
            a.subscribe(
                new l(c, function (a) {
                    d = !0;
                    e = a;
                })
            );
            b.subscribe(
                new l(
                    c,
                    function () {
                        if (d) {
                            d = !1;
                            var a = e;
                            e = null;
                            c.next(a);
                        }
                    },
                    B
                )
            );
        });
    }
    function mc(b, a) {
        return p(Yb(b, a, 2 <= arguments.length, !0));
    }
    function nc(b) {
        void 0 === b && (b = {});
        var a = b.connector,
            c =
                void 0 === a
                    ? function () {
                          return new C();
                      }
                    : a,
            a = b.resetOnError,
            d = void 0 === a ? !0 : a,
            a = b.resetOnComplete,
            e = void 0 === a ? !0 : a;
        b = b.resetOnRefCountZero;
        var f = void 0 === b ? !0 : b;
        return function (a) {
            var b = null,
                g = null,
                n = null,
                r = 0,
                z = !1,
                t = !1,
                F = function () {
                    null === g || void 0 === g ? void 0 : g.unsubscribe();
                    g = null;
                },
                l = function () {
                    F();
                    b = n = null;
                    z = t = !1;
                },
                m = function () {
                    var a = b;
                    l();
                    null === a || void 0 === a ? void 0 : a.unsubscribe();
                };
            return p(function (a, k) {
                r++;
                t || z || F();
                var h = (n = null !== n && void 0 !== n ? n : c());
                k.add(function () {
                    r--;
                    0 !== r || t || z || (g = cb(m, f));
                });
                h.subscribe(k);
                b ||
                    ((b = new Fa({
                        next: function (a) {
                            return h.next(a);
                        },
                        error: function (a) {
                            t = !0;
                            F();
                            g = cb(l, d, a);
                            h.error(a);
                        },
                        complete: function () {
                            z = !0;
                            F();
                            g = cb(l, e);
                            h.complete();
                        },
                    })),
                    ca(a).subscribe(b));
            })(a);
        };
    }
    function cb(b, a) {
        for (var c = [], d = 2; d < arguments.length; d++)
            c[d - 2] = arguments[d];
        return !0 === a
            ? (b(), null)
            : !1 === a
            ? null
            : a
                  .apply(void 0, y([], x(c)))
                  .pipe(ea(1))
                  .subscribe(function () {
                      return b();
                  });
    }
    function pa(b, a) {
        return p(function (c, d) {
            var e = null,
                f = 0,
                g = !1;
            c.subscribe(
                new l(
                    d,
                    function (c) {
                        null === e || void 0 === e ? void 0 : e.unsubscribe();
                        var k = 0,
                            n = f++;
                        v(b(c, n)).subscribe(
                            (e = new l(
                                d,
                                function (b) {
                                    return d.next(a ? a(c, b, n, k++) : b);
                                },
                                function () {
                                    e = null;
                                    g && !e && d.complete();
                                }
                            ))
                        );
                    },
                    function () {
                        ((g = !0), !e) && d.complete();
                    }
                )
            );
        });
    }
    function oc(b, a) {
        a = void 0 === a ? pc : a;
        var c = a.leading,
            d = a.trailing;
        return p(function (a, f) {
            var e = !1,
                k = null,
                h = null,
                n = !1,
                r = function () {
                    null === h || void 0 === h ? void 0 : h.unsubscribe();
                    h = null;
                    d && (t(), n && f.complete());
                },
                z = function () {
                    h = null;
                    n && f.complete();
                },
                t = function () {
                    if (e) {
                        e = !1;
                        var a = k;
                        k = null;
                        f.next(a);
                        !n && (h = v(b(a)).subscribe(new l(f, r, z)));
                    }
                };
            a.subscribe(
                new l(
                    f,
                    function (a) {
                        e = !0;
                        k = a;
                        (!h || h.closed) &&
                            (c ? t() : (h = v(b(a)).subscribe(new l(f, r, z))));
                    },
                    function () {
                        n = !0;
                        (d && e && h && !h.closed) || f.complete();
                    }
                )
            );
        });
    }
    function qc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return p(function (a, d) {
            Xa.apply(void 0, y([a], x(b))).subscribe(d);
        });
    }
    function rc(b, a) {
        for (var c = 0, d = a.length; c < d; c++)
            for (
                var e = a[c],
                    f = Object.getOwnPropertyNames(e.prototype),
                    g = 0,
                    k = f.length;
                g < k;
                g++
            ) {
                var h = f[g];
                b.prototype[h] = e.prototype[h];
            }
    }
    function sc(b) {
        switch (b.responseType) {
            case 'json':
                return 'response' in b
                    ? b.response
                    : JSON.parse(b.responseText);
            case 'document':
                return b.responseXML;
            default:
                return 'response' in b ? b.response : b.responseText;
        }
    }
    function kd(b, a) {
        return W({ method: 'GET', url: b, headers: a });
    }
    function ld(b, a, c) {
        return W({ method: 'POST', url: b, body: a, headers: c });
    }
    function md(b, a) {
        return W({ method: 'DELETE', url: b, headers: a });
    }
    function nd(b, a, c) {
        return W({ method: 'PUT', url: b, body: a, headers: c });
    }
    function od(b, a, c) {
        return W({ method: 'PATCH', url: b, body: a, headers: c });
    }
    function pd(b, a) {
        return qd(W({ method: 'GET', url: b, headers: a }));
    }
    function rd(b) {
        return new u(function (a) {
            var c,
                d,
                e = b.queryParams,
                f = b.body,
                g = b.headers,
                k = nb(b, ['queryParams', 'body', 'headers']),
                h = k.url;
            if (!h) throw new TypeError('url is required');
            if (e) {
                var n;
                if (h.includes('?')) {
                    h = h.split('?');
                    if (2 < h.length) throw new TypeError('invalid url');
                    n = new URLSearchParams(h[1]);
                    new URLSearchParams(e).forEach(function (a, b) {
                        return n.set(b, a);
                    });
                    h = h[0] + '?' + n;
                } else (n = new URLSearchParams(e)), (h = h + '?' + n);
            }
            e = {};
            if (g)
                for (var r in g)
                    g.hasOwnProperty(r) && (e[r.toLowerCase()] = g[r]);
            b.crossDomain ||
                'x-requested-with' in e ||
                (e['x-requested-with'] = 'XMLHttpRequest');
            var z = k.xsrfCookieName,
                g = k.xsrfHeaderName;
            (k.withCredentials || !k.crossDomain) &&
                z &&
                g &&
                (z =
                    null !==
                        (d =
                            null ===
                                (c =
                                    null === document || void 0 === document
                                        ? void 0
                                        : document.cookie.match(
                                              new RegExp(
                                                  '(^|;\\s*)(' +
                                                      z +
                                                      ')\x3d([^;]*)'
                                              )
                                          )) || void 0 === c
                                ? void 0
                                : c.pop()) && void 0 !== d
                        ? d
                        : '') &&
                (e[g] = z);
            c = sd(f, e);
            var t = X(
                    X(
                        {
                            async: !0,
                            crossDomain: !0,
                            withCredentials: !1,
                            method: 'GET',
                            timeout: 0,
                            responseType: 'json',
                        },
                        k
                    ),
                    { url: h, headers: e, body: c }
                ),
                l;
            l = b.createXHR ? b.createXHR() : new XMLHttpRequest();
            var m = b.progressSubscriber,
                k = b.includeDownloadProgress,
                k = void 0 === k ? !1 : k;
            d = b.includeUploadProgress;
            d = void 0 === d ? !1 : d;
            f = function (b, c) {
                l.addEventListener(b, function () {
                    var b,
                        d = c();
                    null ===
                        (b = null === m || void 0 === m ? void 0 : m.error) ||
                    void 0 === b
                        ? void 0
                        : b.call(m, d);
                    a.error(d);
                });
            };
            f('timeout', function () {
                return new tc(l, t);
            });
            f('abort', function () {
                return new qa('aborted', l, t);
            });
            var p = function (b, c, d) {
                b.addEventListener(c, function (b) {
                    a.next(new db(b, l, t, d + '_' + b.type));
                });
            };
            d &&
                [eb, fb, uc].forEach(function (a) {
                    return p(l.upload, a, td);
                });
            m &&
                [eb, fb].forEach(function (a) {
                    return l.upload.addEventListener(a, function (a) {
                        var b;
                        return null ===
                            (b =
                                null === m || void 0 === m ? void 0 : m.next) ||
                            void 0 === b
                            ? void 0
                            : b.call(m, a);
                    });
                });
            k &&
                [eb, fb].forEach(function (a) {
                    return p(l, a, vc);
                });
            var R = function (b) {
                a.error(new qa('ajax error' + (b ? ' ' + b : ''), l, t));
            };
            l.addEventListener('error', function (a) {
                var b;
                null === (b = null === m || void 0 === m ? void 0 : m.error) ||
                void 0 === b
                    ? void 0
                    : b.call(m, a);
                R();
            });
            l.addEventListener(uc, function (b) {
                var c,
                    d,
                    e = l.status;
                if (400 > e) {
                    null ===
                        (c =
                            null === m || void 0 === m ? void 0 : m.complete) ||
                    void 0 === c
                        ? void 0
                        : c.call(m);
                    c = void 0;
                    try {
                        c = new db(b, l, t, vc + '_' + b.type);
                    } catch (ud) {
                        a.error(ud);
                        return;
                    }
                    a.next(c);
                    a.complete();
                } else null === (d = null === m || void 0 === m ? void 0 : m.error) || void 0 === d ? void 0 : d.call(m, b), R(e);
            });
            k = t.user;
            d = t.method;
            f = t.async;
            k ? l.open(d, h, f, k, t.password) : l.open(d, h, f);
            f && ((l.timeout = t.timeout), (l.responseType = t.responseType));
            'withCredentials' in l && (l.withCredentials = t.withCredentials);
            for (r in e) e.hasOwnProperty(r) && l.setRequestHeader(r, e[r]);
            c ? l.send(c) : l.send();
            return function () {
                l && 4 !== l.readyState && l.abort();
            };
        });
    }
    function sd(b, a) {
        var c;
        if (
            !b ||
            'string' === typeof b ||
            ('undefined' !== typeof FormData && b instanceof FormData) ||
            ('undefined' !== typeof URLSearchParams &&
                b instanceof URLSearchParams) ||
            gb(b, 'ArrayBuffer') ||
            gb(b, 'File') ||
            gb(b, 'Blob') ||
            ('undefined' !== typeof ReadableStream &&
                b instanceof ReadableStream)
        )
            return b;
        if ('undefined' !== typeof ArrayBuffer && ArrayBuffer.isView(b))
            return b.buffer;
        if ('object' === typeof b)
            return (
                (a['content-type'] =
                    null !== (c = a['content-type']) && void 0 !== c
                        ? c
                        : 'application/json;charset\x3dutf-8'),
                JSON.stringify(b)
            );
        throw new TypeError('Unknown body type');
    }
    function gb(b, a) {
        return vd.call(b) === '[object ' + a + ']';
    }
    var Ia = function (b, a) {
            Ia =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (a, b) {
                        a.__proto__ = b;
                    }) ||
                function (a, b) {
                    for (var c in b)
                        Object.prototype.hasOwnProperty.call(b, c) &&
                            (a[c] = b[c]);
                };
            return Ia(b, a);
        },
        X = function () {
            X =
                Object.assign ||
                function (b) {
                    for (var a, c = 1, d = arguments.length; c < d; c++) {
                        a = arguments[c];
                        for (var e in a)
                            Object.prototype.hasOwnProperty.call(a, e) &&
                                (b[e] = a[e]);
                    }
                    return b;
                };
            return X.apply(this, arguments);
        },
        Ga = P(function (b) {
            return function (a) {
                b(this);
                this.message = a
                    ? a.length +
                      ' errors occurred during unsubscription:\n' +
                      a
                          .map(function (a, b) {
                              return b + 1 + ') ' + a.toString();
                          })
                          .join('\n  ')
                    : '';
                this.name = 'UnsubscriptionError';
                this.errors = a;
            };
        }),
        A = (function () {
            function b(a) {
                this.initialTeardown = a;
                this.closed = !1;
                this._teardowns = this._parentage = null;
            }
            b.prototype.unsubscribe = function () {
                var a, b, d, e, f;
                if (!this.closed) {
                    this.closed = !0;
                    var g = this._parentage;
                    if (g)
                        if (((this._parentage = null), Array.isArray(g)))
                            try {
                                for (
                                    var k = E(g), h = k.next();
                                    !h.done;
                                    h = k.next()
                                )
                                    h.value.remove(this);
                            } catch (t) {
                                a = { error: t };
                            } finally {
                                try {
                                    h && !h.done && (b = k.return) && b.call(k);
                                } finally {
                                    if (a) throw a.error;
                                }
                            }
                        else g.remove(this);
                    a = this.initialTeardown;
                    if (q(a))
                        try {
                            a();
                        } catch (t) {
                            f = t instanceof Ga ? t.errors : [t];
                        }
                    if ((a = this._teardowns)) {
                        this._teardowns = null;
                        try {
                            for (
                                var n = E(a), r = n.next();
                                !r.done;
                                r = n.next()
                            ) {
                                var l = r.value;
                                try {
                                    (a = l), q(a) ? a() : a.unsubscribe();
                                } catch (t) {
                                    (f = null !== f && void 0 !== f ? f : []),
                                        t instanceof Ga
                                            ? (f = y(y([], x(f)), x(t.errors)))
                                            : f.push(t);
                                }
                            }
                        } catch (t) {
                            d = { error: t };
                        } finally {
                            try {
                                r && !r.done && (e = n.return) && e.call(n);
                            } finally {
                                if (d) throw d.error;
                            }
                        }
                    }
                    if (f) throw new Ga(f);
                }
            };
            b.prototype.add = function (a) {
                var c;
                if (a && a !== this)
                    if (this.closed) q(a) ? a() : a.unsubscribe();
                    else {
                        if (a instanceof b) {
                            if (a.closed || a._hasParent(this)) return;
                            a._addParent(this);
                        }
                        (this._teardowns =
                            null !== (c = this._teardowns) && void 0 !== c
                                ? c
                                : []).push(a);
                    }
            };
            b.prototype._hasParent = function (a) {
                var b = this._parentage;
                return b === a || (Array.isArray(b) && b.includes(a));
            };
            b.prototype._addParent = function (a) {
                var b = this._parentage;
                this._parentage = Array.isArray(b)
                    ? (b.push(a), b)
                    : b
                    ? [b, a]
                    : a;
            };
            b.prototype._removeParent = function (a) {
                var b = this._parentage;
                b === a
                    ? (this._parentage = null)
                    : Array.isArray(b) && K(b, a);
            };
            b.prototype.remove = function (a) {
                var c = this._teardowns;
                c && K(c, a);
                a instanceof b && a._removeParent(this);
            };
            b.EMPTY = (function () {
                var a = new b();
                a.closed = !0;
                return a;
            })();
            return b;
        })(),
        wc = A.EMPTY,
        S = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1,
        },
        aa = {
            setTimeout: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                a = aa.delegate;
                return (
                    (null === a || void 0 === a ? void 0 : a.setTimeout) ||
                    setTimeout
                ).apply(void 0, y([], x(b)));
            },
            clearTimeout: function (b) {
                var a = aa.delegate;
                return (
                    (null === a || void 0 === a ? void 0 : a.clearTimeout) ||
                    clearTimeout
                )(b);
            },
            delegate: void 0,
        },
        ra = G('C', void 0, void 0),
        sa = (function (b) {
            function a(a) {
                var c = b.call(this) || this;
                c.isStopped = !1;
                a
                    ? ((c.destination = a), ob(a) && a.add(c))
                    : (c.destination = wd);
                return c;
            }
            w(a, b);
            a.create = function (a, b, e) {
                return new Fa(a, b, e);
            };
            a.prototype.next = function (a) {
                this.isStopped ? La(G('N', a, void 0), this) : this._next(a);
            };
            a.prototype.error = function (a) {
                this.isStopped
                    ? La(G('E', void 0, a), this)
                    : ((this.isStopped = !0), this._error(a));
            };
            a.prototype.complete = function () {
                this.isStopped
                    ? La(ra, this)
                    : ((this.isStopped = !0), this._complete());
            };
            a.prototype.unsubscribe = function () {
                this.closed ||
                    ((this.isStopped = !0),
                    b.prototype.unsubscribe.call(this),
                    (this.destination = null));
            };
            a.prototype._next = function (a) {
                this.destination.next(a);
            };
            a.prototype._error = function (a) {
                try {
                    this.destination.error(a);
                } finally {
                    this.unsubscribe();
                }
            };
            a.prototype._complete = function () {
                try {
                    this.destination.complete();
                } finally {
                    this.unsubscribe();
                }
            };
            return a;
        })(A),
        Fa = (function (b) {
            function a(a, d, e) {
                var c = b.call(this) || this,
                    g;
                q(a)
                    ? (g = a)
                    : a &&
                      ((g = a.next),
                      (d = a.error),
                      (e = a.complete),
                      c &&
                          S.useDeprecatedNextContext &&
                          ((a = Object.create(a)),
                          (a.unsubscribe = function () {
                              return c.unsubscribe();
                          })),
                      (g = null === g || void 0 === g ? void 0 : g.bind(a)),
                      (d = null === d || void 0 === d ? void 0 : d.bind(a)),
                      (e = null === e || void 0 === e ? void 0 : e.bind(a)));
                c.destination = {
                    next: g ? Ka(g, c) : B,
                    error: Ka(null !== d && void 0 !== d ? d : qb, c),
                    complete: e ? Ka(e, c) : B,
                };
                return c;
            }
            w(a, b);
            return a;
        })(sa),
        wd = { closed: !0, next: B, error: qb, complete: B },
        ba =
            ('function' === typeof Symbol && Symbol.observable) ||
            '@@observable',
        u = (function () {
            function b(a) {
                a && (this._subscribe = a);
            }
            b.prototype.lift = function (a) {
                var c = new b();
                c.source = this;
                c.operator = a;
                return c;
            };
            b.prototype.subscribe = function (a, b, d) {
                var c;
                (c = a && a instanceof sa) ||
                    (c =
                        a && q(a.next) && q(a.error) && q(a.complete) && ob(a));
                a = c ? a : new Fa(a, b, d);
                S.useDeprecatedSynchronousErrorHandling
                    ? this._deprecatedSyncErrorSubscribe(a)
                    : ((b = this.operator),
                      (d = this.source),
                      a.add(
                          b
                              ? b.call(a, d)
                              : d
                              ? this._subscribe(a)
                              : this._trySubscribe(a)
                      ));
                return a;
            };
            b.prototype._deprecatedSyncErrorSubscribe = function (a) {
                a._syncErrorHack_isSubscribing = !0;
                var b = this.operator;
                if (b) a.add(b.call(a, this.source));
                else
                    try {
                        a.add(this._subscribe(a));
                    } catch (d) {
                        a.__syncError = d;
                    }
                for (b = a; b; ) {
                    if ('__syncError' in b)
                        try {
                            throw b.__syncError;
                        } finally {
                            a.unsubscribe();
                        }
                    b = b.destination;
                }
                a._syncErrorHack_isSubscribing = !1;
            };
            b.prototype._trySubscribe = function (a) {
                try {
                    return this._subscribe(a);
                } catch (c) {
                    a.error(c);
                }
            };
            b.prototype.forEach = function (a, b) {
                var c = this;
                b = sb(b);
                return new b(function (b, d) {
                    var e;
                    e = c.subscribe(
                        function (b) {
                            try {
                                a(b);
                            } catch (h) {
                                d(h),
                                    null === e || void 0 === e
                                        ? void 0
                                        : e.unsubscribe();
                            }
                        },
                        d,
                        b
                    );
                });
            };
            b.prototype._subscribe = function (a) {
                var b;
                return null === (b = this.source) || void 0 === b
                    ? void 0
                    : b.subscribe(a);
            };
            b.prototype[ba] = function () {
                return this;
            };
            b.prototype.pipe = function () {
                for (var a = [], b = 0; b < arguments.length; b++)
                    a[b] = arguments[b];
                return a.length ? rb(a)(this) : this;
            };
            b.prototype.toPromise = function (a) {
                var b = this;
                a = sb(a);
                return new a(function (a, c) {
                    var d;
                    b.subscribe(
                        function (a) {
                            return (d = a);
                        },
                        function (a) {
                            return c(a);
                        },
                        function () {
                            return a(d);
                        }
                    );
                });
            };
            b.create = function (a) {
                return new b(a);
            };
            return b;
        })(),
        l = (function (b) {
            function a(a, d, e, f, g) {
                var c = b.call(this, a) || this;
                c.onFinalize = g;
                c._next = d
                    ? function (b) {
                          try {
                              d(b);
                          } catch (n) {
                              a.error(n);
                          }
                      }
                    : b.prototype._next;
                c._error = f
                    ? function (b) {
                          try {
                              f(b);
                          } catch (n) {
                              a.error(n);
                          } finally {
                              this.unsubscribe();
                          }
                      }
                    : b.prototype._error;
                c._complete = e
                    ? function () {
                          try {
                              e();
                          } catch (h) {
                              a.error(h);
                          } finally {
                              this.unsubscribe();
                          }
                      }
                    : b.prototype._complete;
                return c;
            }
            w(a, b);
            a.prototype.unsubscribe = function () {
                var a,
                    d = this.closed;
                b.prototype.unsubscribe.call(this);
                !d &&
                    (null === (a = this.onFinalize) || void 0 === a
                        ? void 0
                        : a.call(this));
            };
            return a;
        })(sa),
        Ea = (function (b) {
            function a(a, d) {
                var c = b.call(this) || this;
                c.source = a;
                c.subjectFactory = d;
                c._subject = null;
                c._refCount = 0;
                c._connection = null;
                q(null === a || void 0 === a ? void 0 : a.lift) &&
                    (c.lift = a.lift);
                return c;
            }
            w(a, b);
            a.prototype._subscribe = function (a) {
                return this.getSubject().subscribe(a);
            };
            a.prototype.getSubject = function () {
                var a = this._subject;
                if (!a || a.isStopped) this._subject = this.subjectFactory();
                return this._subject;
            };
            a.prototype._teardown = function () {
                this._refCount = 0;
                var a = this._connection;
                this._subject = this._connection = null;
                null === a || void 0 === a ? void 0 : a.unsubscribe();
            };
            a.prototype.connect = function () {
                var a = this,
                    b = this._connection;
                if (!b) {
                    var b = (this._connection = new A()),
                        e = this.getSubject();
                    b.add(
                        this.source.subscribe(
                            new l(
                                e,
                                void 0,
                                function () {
                                    a._teardown();
                                    e.complete();
                                },
                                function (b) {
                                    a._teardown();
                                    e.error(b);
                                },
                                function () {
                                    return a._teardown();
                                }
                            )
                        )
                    );
                    b.closed && ((this._connection = null), (b = A.EMPTY));
                }
                return b;
            };
            a.prototype.refCount = function () {
                return tb()(this);
            };
            return a;
        })(u),
        wa = {
            now: function () {
                return (wa.delegate || performance).now();
            },
            delegate: void 0,
        },
        Q = {
            schedule: function (b) {
                var a = requestAnimationFrame,
                    c = cancelAnimationFrame,
                    d = Q.delegate;
                d &&
                    ((a = d.requestAnimationFrame),
                    (c = d.cancelAnimationFrame));
                var e = a(function (a) {
                    c = void 0;
                    b(a);
                });
                return new A(function () {
                    return null === c || void 0 === c ? void 0 : c(e);
                });
            },
            requestAnimationFrame: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                a = Q.delegate;
                return (
                    (null === a || void 0 === a
                        ? void 0
                        : a.requestAnimationFrame) || requestAnimationFrame
                ).apply(void 0, y([], x(b)));
            },
            cancelAnimationFrame: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                a = Q.delegate;
                return (
                    (null === a || void 0 === a
                        ? void 0
                        : a.cancelAnimationFrame) || cancelAnimationFrame
                ).apply(void 0, y([], x(b)));
            },
            delegate: void 0,
        },
        xd = ub(),
        xc = P(function (b) {
            return function () {
                b(this);
                this.name = 'ObjectUnsubscribedError';
                this.message = 'object unsubscribed';
            };
        }),
        C = (function (b) {
            function a() {
                var a = b.call(this) || this;
                a.closed = !1;
                a.observers = [];
                a.isStopped = !1;
                a.hasError = !1;
                a.thrownError = null;
                return a;
            }
            w(a, b);
            a.prototype.lift = function (a) {
                var b = new hb(this, this);
                b.operator = a;
                return b;
            };
            a.prototype._throwIfClosed = function () {
                if (this.closed) throw new xc();
            };
            a.prototype.next = function (a) {
                var b, c;
                this._throwIfClosed();
                if (!this.isStopped) {
                    var f = this.observers.slice();
                    try {
                        for (var g = E(f), k = g.next(); !k.done; k = g.next())
                            k.value.next(a);
                    } catch (h) {
                        b = { error: h };
                    } finally {
                        try {
                            k && !k.done && (c = g.return) && c.call(g);
                        } finally {
                            if (b) throw b.error;
                        }
                    }
                }
            };
            a.prototype.error = function (a) {
                this._throwIfClosed();
                if (!this.isStopped) {
                    this.hasError = this.isStopped = !0;
                    this.thrownError = a;
                    for (var b = this.observers; b.length; ) b.shift().error(a);
                }
            };
            a.prototype.complete = function () {
                this._throwIfClosed();
                if (!this.isStopped) {
                    this.isStopped = !0;
                    for (var a = this.observers; a.length; )
                        a.shift().complete();
                }
            };
            a.prototype.unsubscribe = function () {
                this.isStopped = this.closed = !0;
                this.observers = null;
            };
            Object.defineProperty(a.prototype, 'observed', {
                get: function () {
                    var a;
                    return (
                        0 <
                        (null === (a = this.observers) || void 0 === a
                            ? void 0
                            : a.length)
                    );
                },
                enumerable: !1,
                configurable: !0,
            });
            a.prototype._trySubscribe = function (a) {
                this._throwIfClosed();
                return b.prototype._trySubscribe.call(this, a);
            };
            a.prototype._subscribe = function (a) {
                this._throwIfClosed();
                this._checkFinalizedStatuses(a);
                return this._innerSubscribe(a);
            };
            a.prototype._innerSubscribe = function (a) {
                var b = this.isStopped,
                    c = this.observers;
                return this.hasError || b
                    ? wc
                    : (c.push(a),
                      new A(function () {
                          return K(c, a);
                      }));
            };
            a.prototype._checkFinalizedStatuses = function (a) {
                var b = this.thrownError,
                    c = this.isStopped;
                this.hasError ? a.error(b) : c && a.complete();
            };
            a.prototype.asObservable = function () {
                var a = new u();
                a.source = this;
                return a;
            };
            a.create = function (a, b) {
                return new hb(a, b);
            };
            return a;
        })(u),
        hb = (function (b) {
            function a(a, d) {
                var c = b.call(this) || this;
                c.destination = a;
                c.source = d;
                return c;
            }
            w(a, b);
            a.prototype.next = function (a) {
                var b, c;
                null ===
                    (c =
                        null === (b = this.destination) || void 0 === b
                            ? void 0
                            : b.next) || void 0 === c
                    ? void 0
                    : c.call(b, a);
            };
            a.prototype.error = function (a) {
                var b, c;
                null ===
                    (c =
                        null === (b = this.destination) || void 0 === b
                            ? void 0
                            : b.error) || void 0 === c
                    ? void 0
                    : c.call(b, a);
            };
            a.prototype.complete = function () {
                var a, b;
                null ===
                    (b =
                        null === (a = this.destination) || void 0 === a
                            ? void 0
                            : a.complete) || void 0 === b
                    ? void 0
                    : b.call(a);
            };
            a.prototype._subscribe = function (a) {
                var b, c;
                return null !==
                    (c =
                        null === (b = this.source) || void 0 === b
                            ? void 0
                            : b.subscribe(a)) && void 0 !== c
                    ? c
                    : wc;
            };
            return a;
        })(C),
        yc = (function (b) {
            function a(a) {
                var c = b.call(this) || this;
                c._value = a;
                return c;
            }
            w(a, b);
            Object.defineProperty(a.prototype, 'value', {
                get: function () {
                    return this.getValue();
                },
                enumerable: !1,
                configurable: !0,
            });
            a.prototype._subscribe = function (a) {
                var c = b.prototype._subscribe.call(this, a);
                !c.closed && a.next(this._value);
                return c;
            };
            a.prototype.getValue = function () {
                var a = this.thrownError,
                    b = this._value;
                if (this.hasError) throw a;
                this._throwIfClosed();
                return b;
            };
            a.prototype.next = function (a) {
                b.prototype.next.call(this, (this._value = a));
            };
            return a;
        })(C),
        fa = {
            now: function () {
                return (fa.delegate || Date).now();
            },
            delegate: void 0,
        },
        ga = (function (b) {
            function a(a, d, e) {
                void 0 === a && (a = Infinity);
                void 0 === d && (d = Infinity);
                void 0 === e && (e = fa);
                var c = b.call(this) || this;
                c._bufferSize = a;
                c._windowTime = d;
                c._timestampProvider = e;
                c._buffer = [];
                c._infiniteTimeWindow = Infinity === d;
                c._bufferSize = Math.max(1, a);
                c._windowTime = Math.max(1, d);
                return c;
            }
            w(a, b);
            a.prototype.next = function (a) {
                var c = this._buffer,
                    e = this._infiniteTimeWindow,
                    f = this._timestampProvider,
                    g = this._windowTime;
                this.isStopped || (c.push(a), !e && c.push(f.now() + g));
                this._trimBuffer();
                b.prototype.next.call(this, a);
            };
            a.prototype._subscribe = function (a) {
                this._throwIfClosed();
                this._trimBuffer();
                for (
                    var b = this._innerSubscribe(a),
                        c = this._infiniteTimeWindow,
                        f = this._buffer.slice(),
                        g = 0;
                    g < f.length && !a.closed;
                    g += c ? 1 : 2
                )
                    a.next(f[g]);
                this._checkFinalizedStatuses(a);
                return b;
            };
            a.prototype._trimBuffer = function () {
                var a = this._bufferSize,
                    b = this._timestampProvider,
                    e = this._buffer,
                    f = this._infiniteTimeWindow,
                    g = (f ? 1 : 2) * a;
                Infinity > a && g < e.length && e.splice(0, e.length - g);
                if (!f) {
                    a = b.now();
                    b = 0;
                    for (f = 1; f < e.length && e[f] <= a; f += 2) b = f;
                    b && e.splice(0, b + 1);
                }
            };
            return a;
        })(C),
        Ta = (function (b) {
            function a() {
                var a = (null !== b && b.apply(this, arguments)) || this;
                a._value = null;
                a._hasValue = !1;
                a._isComplete = !1;
                return a;
            }
            w(a, b);
            a.prototype._checkFinalizedStatuses = function (a) {
                var b = this._hasValue,
                    c = this._value,
                    f = this.thrownError,
                    g = this.isStopped;
                this.hasError
                    ? a.error(f)
                    : g && (b && a.next(c), a.complete());
            };
            a.prototype.next = function (a) {
                this.isStopped || ((this._value = a), (this._hasValue = !0));
            };
            a.prototype.complete = function () {
                var a = this._hasValue,
                    d = this._value;
                this._isComplete ||
                    ((this._isComplete = !0),
                    a && b.prototype.next.call(this, d),
                    b.prototype.complete.call(this));
            };
            return a;
        })(C),
        ha = {
            setInterval: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                a = ha.delegate;
                return (
                    (null === a || void 0 === a ? void 0 : a.setInterval) ||
                    setInterval
                ).apply(void 0, y([], x(b)));
            },
            clearInterval: function (b) {
                var a = ha.delegate;
                return (
                    (null === a || void 0 === a ? void 0 : a.clearInterval) ||
                    clearInterval
                )(b);
            },
            delegate: void 0,
        },
        ta = (function (b) {
            function a(a, d) {
                var c = b.call(this, a, d) || this;
                c.scheduler = a;
                c.work = d;
                c.pending = !1;
                return c;
            }
            w(a, b);
            a.prototype.schedule = function (a, b) {
                void 0 === b && (b = 0);
                if (this.closed) return this;
                this.state = a;
                a = this.id;
                var c = this.scheduler;
                null != a && (this.id = this.recycleAsyncId(c, a, b));
                this.pending = !0;
                this.delay = b;
                this.id = this.id || this.requestAsyncId(c, this.id, b);
                return this;
            };
            a.prototype.requestAsyncId = function (a, b, e) {
                void 0 === e && (e = 0);
                return ha.setInterval(a.flush.bind(a, this), e);
            };
            a.prototype.recycleAsyncId = function (a, b, e) {
                void 0 === e && (e = 0);
                if (null != e && this.delay === e && !1 === this.pending)
                    return b;
                ha.clearInterval(b);
            };
            a.prototype.execute = function (a, b) {
                if (this.closed) return Error('executing a cancelled action');
                this.pending = !1;
                if ((a = this._execute(a, b))) return a;
                !1 === this.pending &&
                    null != this.id &&
                    (this.id = this.recycleAsyncId(
                        this.scheduler,
                        this.id,
                        null
                    ));
            };
            a.prototype._execute = function (a, b) {
                b = !1;
                var c;
                try {
                    this.work(a);
                } catch (f) {
                    (b = !0), (c = (!!f && f) || Error(f));
                }
                if (b) return this.unsubscribe(), c;
            };
            a.prototype.unsubscribe = function () {
                if (!this.closed) {
                    var a = this.id,
                        d = this.scheduler,
                        e = d.actions;
                    this.work = this.state = this.scheduler = null;
                    this.pending = !1;
                    K(e, this);
                    null != a && (this.id = this.recycleAsyncId(d, a, null));
                    this.delay = null;
                    b.prototype.unsubscribe.call(this);
                }
            };
            return a;
        })(
            (function (b) {
                function a(a, d) {
                    return b.call(this) || this;
                }
                w(a, b);
                a.prototype.schedule = function (a, b) {
                    return this;
                };
                return a;
            })(A)
        ),
        yd = 1,
        ib,
        Na = {},
        zd = function (b) {
            var a = yd++;
            Na[a] = !0;
            ib || (ib = Promise.resolve());
            ib.then(function () {
                return vb(a) && b();
            });
            return a;
        },
        Ad = function (b) {
            vb(b);
        },
        ia = {
            setImmediate: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                a = ia.delegate;
                return (
                    (null === a || void 0 === a ? void 0 : a.setImmediate) || zd
                ).apply(void 0, y([], x(b)));
            },
            clearImmediate: function (b) {
                var a = ia.delegate;
                return (
                    (null === a || void 0 === a ? void 0 : a.clearImmediate) ||
                    Ad
                )(b);
            },
            delegate: void 0,
        },
        Bd = (function (b) {
            function a(a, d) {
                var c = b.call(this, a, d) || this;
                c.scheduler = a;
                c.work = d;
                return c;
            }
            w(a, b);
            a.prototype.requestAsyncId = function (a, d, e) {
                void 0 === e && (e = 0);
                if (null !== e && 0 < e)
                    return b.prototype.requestAsyncId.call(this, a, d, e);
                a.actions.push(this);
                return (
                    a._scheduled ||
                    (a._scheduled = ia.setImmediate(a.flush.bind(a, void 0)))
                );
            };
            a.prototype.recycleAsyncId = function (a, d, e) {
                void 0 === e && (e = 0);
                if ((null != e && 0 < e) || (null == e && 0 < this.delay))
                    return b.prototype.recycleAsyncId.call(this, a, d, e);
                0 === a.actions.length &&
                    (ia.clearImmediate(d), (a._scheduled = void 0));
            };
            return a;
        })(ta),
        jb = (function () {
            function b(a, c) {
                void 0 === c && (c = b.now);
                this.schedulerActionCtor = a;
                this.now = c;
            }
            b.prototype.schedule = function (a, b, d) {
                void 0 === b && (b = 0);
                return new this.schedulerActionCtor(this, a).schedule(d, b);
            };
            b.now = fa.now;
            return b;
        })(),
        ua = (function (b) {
            function a(a, d) {
                void 0 === d && (d = jb.now);
                a = b.call(this, a, d) || this;
                a.actions = [];
                a._active = !1;
                a._scheduled = void 0;
                return a;
            }
            w(a, b);
            a.prototype.flush = function (a) {
                var b = this.actions;
                if (this._active) b.push(a);
                else {
                    var c;
                    this._active = !0;
                    do if ((c = a.execute(a.state, a.delay))) break;
                    while ((a = b.shift()));
                    this._active = !1;
                    if (c) {
                        for (; (a = b.shift()); ) a.unsubscribe();
                        throw c;
                    }
                }
            };
            return a;
        })(jb),
        zc = new ((function (b) {
            function a() {
                return (null !== b && b.apply(this, arguments)) || this;
            }
            w(a, b);
            a.prototype.flush = function (a) {
                this._active = !0;
                this._scheduled = void 0;
                var b = this.actions,
                    c,
                    f = -1;
                a = a || b.shift();
                var g = b.length;
                do if ((c = a.execute(a.state, a.delay))) break;
                while (++f < g && (a = b.shift()));
                this._active = !1;
                if (c) {
                    for (; ++f < g && (a = b.shift()); ) a.unsubscribe();
                    throw c;
                }
            };
            return a;
        })(ua))(Bd),
        J = new ua(ta),
        na = J,
        Cd = (function (b) {
            function a(a, d) {
                var c = b.call(this, a, d) || this;
                c.scheduler = a;
                c.work = d;
                return c;
            }
            w(a, b);
            a.prototype.schedule = function (a, d) {
                void 0 === d && (d = 0);
                if (0 < d) return b.prototype.schedule.call(this, a, d);
                this.delay = d;
                this.state = a;
                this.scheduler.flush(this);
                return this;
            };
            a.prototype.execute = function (a, d) {
                return 0 < d || this.closed
                    ? b.prototype.execute.call(this, a, d)
                    : this._execute(a, d);
            };
            a.prototype.requestAsyncId = function (a, d, e) {
                void 0 === e && (e = 0);
                return (null != e && 0 < e) || (null == e && 0 < this.delay)
                    ? b.prototype.requestAsyncId.call(this, a, d, e)
                    : a.flush(this);
            };
            return a;
        })(ta),
        Ac = new ((function (b) {
            function a() {
                return (null !== b && b.apply(this, arguments)) || this;
            }
            w(a, b);
            return a;
        })(ua))(Cd),
        Dd = (function (b) {
            function a(a, d) {
                var c = b.call(this, a, d) || this;
                c.scheduler = a;
                c.work = d;
                return c;
            }
            w(a, b);
            a.prototype.requestAsyncId = function (a, d, e) {
                void 0 === e && (e = 0);
                if (null !== e && 0 < e)
                    return b.prototype.requestAsyncId.call(this, a, d, e);
                a.actions.push(this);
                return (
                    a._scheduled ||
                    (a._scheduled = Q.requestAnimationFrame(function () {
                        return a.flush(void 0);
                    }))
                );
            };
            a.prototype.recycleAsyncId = function (a, d, e) {
                void 0 === e && (e = 0);
                if ((null != e && 0 < e) || (null == e && 0 < this.delay))
                    return b.prototype.recycleAsyncId.call(this, a, d, e);
                0 === a.actions.length &&
                    (Q.cancelAnimationFrame(d), (a._scheduled = void 0));
            };
            return a;
        })(ta),
        Bc = new ((function (b) {
            function a() {
                return (null !== b && b.apply(this, arguments)) || this;
            }
            w(a, b);
            a.prototype.flush = function (a) {
                this._active = !0;
                this._scheduled = void 0;
                var b = this.actions,
                    c,
                    f = -1;
                a = a || b.shift();
                var g = b.length;
                do if ((c = a.execute(a.state, a.delay))) break;
                while (++f < g && (a = b.shift()));
                this._active = !1;
                if (c) {
                    for (; ++f < g && (a = b.shift()); ) a.unsubscribe();
                    throw c;
                }
            };
            return a;
        })(ua))(Dd),
        Cc = (function (b) {
            function a(a, d) {
                void 0 === a && (a = kb);
                void 0 === d && (d = Infinity);
                var c =
                    b.call(this, a, function () {
                        return c.frame;
                    }) || this;
                c.maxFrames = d;
                c.frame = 0;
                c.index = -1;
                return c;
            }
            w(a, b);
            a.prototype.flush = function () {
                for (
                    var a = this.actions, b = this.maxFrames, e, f;
                    (f = a[0]) &&
                    f.delay <= b &&
                    !(a.shift(),
                    (this.frame = f.delay),
                    (e = f.execute(f.state, f.delay)));

                );
                if (e) {
                    for (; (f = a.shift()); ) f.unsubscribe();
                    throw e;
                }
            };
            a.frameTimeFactor = 10;
            return a;
        })(ua),
        kb = (function (b) {
            function a(a, d, e) {
                void 0 === e && (e = a.index += 1);
                var c = b.call(this, a, d) || this;
                c.scheduler = a;
                c.work = d;
                c.index = e;
                c.active = !0;
                c.index = a.index = e;
                return c;
            }
            w(a, b);
            a.prototype.schedule = function (c, d) {
                void 0 === d && (d = 0);
                if (Number.isFinite(d)) {
                    if (!this.id) return b.prototype.schedule.call(this, c, d);
                    this.active = !1;
                    var e = new a(this.scheduler, this.work);
                    this.add(e);
                    return e.schedule(c, d);
                }
                return A.EMPTY;
            };
            a.prototype.requestAsyncId = function (b, d, e) {
                void 0 === e && (e = 0);
                this.delay = b.frame + e;
                b = b.actions;
                b.push(this);
                b.sort(a.sortActions);
                return !0;
            };
            a.prototype.recycleAsyncId = function (a, b, e) {};
            a.prototype._execute = function (a, d) {
                if (!0 === this.active)
                    return b.prototype._execute.call(this, a, d);
            };
            a.sortActions = function (a, b) {
                return a.delay === b.delay
                    ? a.index === b.index
                        ? 0
                        : a.index > b.index
                        ? 1
                        : -1
                    : a.delay > b.delay
                    ? 1
                    : -1;
            };
            return a;
        })(ta),
        I = new u(function (b) {
            return b.complete();
        }),
        Qa = function (b) {
            return b && 'number' === typeof b.length && 'function' !== typeof b;
        },
        Pa;
    Pa =
        'function' === typeof Symbol && Symbol.iterator
            ? Symbol.iterator
            : '@@iterator';
    (function (b) {
        b.NEXT = 'N';
        b.ERROR = 'E';
        b.COMPLETE = 'C';
    })(m.NotificationKind || (m.NotificationKind = {}));
    var Ha = (function () {
            function b(a, b, d) {
                this.kind = a;
                this.value = b;
                this.error = d;
                this.hasValue = 'N' === a;
            }
            b.prototype.observe = function (a) {
                return ya(this, a);
            };
            b.prototype.do = function (a, b, d) {
                var c = this.kind,
                    f = this.value,
                    g = this.error;
                return 'N' === c
                    ? null === a || void 0 === a
                        ? void 0
                        : a(f)
                    : 'E' === c
                    ? null === b || void 0 === b
                        ? void 0
                        : b(g)
                    : null === d || void 0 === d
                    ? void 0
                    : d();
            };
            b.prototype.accept = function (a, b, d) {
                return q(null === a || void 0 === a ? void 0 : a.next)
                    ? this.observe(a)
                    : this.do(a, b, d);
            };
            b.prototype.toObservable = function () {
                var a = this.kind,
                    b = this.value,
                    d = this.error,
                    b =
                        'N' === a
                            ? Ra(b)
                            : 'E' === a
                            ? Gb(function () {
                                  return d;
                              })
                            : 'C' === a
                            ? I
                            : 0;
                if (!b)
                    throw new TypeError('Unexpected notification kind ' + a);
                return b;
            };
            b.createNext = function (a) {
                return new b('N', a);
            };
            b.createError = function (a) {
                return new b('E', void 0, a);
            };
            b.createComplete = function () {
                return b.completeNotification;
            };
            b.completeNotification = new b('C');
            return b;
        })(),
        V = P(function (b) {
            return function () {
                b(this);
                this.name = 'EmptyError';
                this.message = 'no elements in sequence';
            };
        }),
        lb = P(function (b) {
            return function () {
                b(this);
                this.name = 'ArgumentOutOfRangeError';
                this.message = 'argument out of range';
            };
        }),
        Dc = P(function (b) {
            return function (a) {
                b(this);
                this.name = 'NotFoundError';
                this.message = a;
            };
        }),
        Ec = P(function (b) {
            return function (a) {
                b(this);
                this.name = 'SequenceError';
                this.message = a;
            };
        }),
        Ib = P(function (b) {
            return function (a) {
                void 0 === a && (a = null);
                b(this);
                this.message = 'Timeout has occurred';
                this.name = 'TimeoutError';
                this.info = a;
            };
        }),
        Uc = Array.isArray,
        Vc = Array.isArray,
        Wc = Object.getPrototypeOf,
        Xc = Object.prototype,
        Yc = Object.keys,
        Ed = {
            connector: function () {
                return new C();
            },
            resetOnDisconnect: !0,
        },
        bd = ['addListener', 'removeListener'],
        $c = ['addEventListener', 'removeEventListener'],
        dd = ['on', 'off'],
        Fc = new u(B),
        ed = Array.isArray,
        fd = function (b, a) {
            return b.push(a), b;
        },
        hd = {
            connector: function () {
                return new C();
            },
        },
        Fd = (function (b) {
            function a() {
                var a = (null !== b && b.apply(this, arguments)) || this;
                a.activeGroups = 0;
                a.teardownAttempted = !1;
                return a;
            }
            w(a, b);
            a.prototype.unsubscribe = function () {
                this.teardownAttempted = !0;
                0 === this.activeGroups && b.prototype.unsubscribe.call(this);
            };
            return a;
        })(l),
        pc = { leading: !0, trailing: !1 },
        Gd = (function () {
            return function (b, a) {
                this.value = b;
                this.interval = a;
            };
        })(),
        Id = Object.freeze({
            audit: Wb,
            auditTime: function (b, a) {
                void 0 === a && (a = na);
                return Wb(function () {
                    return ma(b, a);
                });
            },
            buffer: function (b) {
                return p(function (a, c) {
                    var d = [];
                    a.subscribe(
                        new l(
                            c,
                            function (a) {
                                return d.push(a);
                            },
                            function () {
                                c.next(d);
                                c.complete();
                            }
                        )
                    );
                    b.subscribe(
                        new l(
                            c,
                            function () {
                                var a = d;
                                d = [];
                                c.next(a);
                            },
                            B
                        )
                    );
                    return function () {
                        d = null;
                    };
                });
            },
            bufferCount: function (b, a) {
                void 0 === a && (a = null);
                a = null !== a && void 0 !== a ? a : b;
                return p(function (c, d) {
                    var e = [],
                        f = 0;
                    c.subscribe(
                        new l(
                            d,
                            function (c) {
                                var g,
                                    h,
                                    n,
                                    r,
                                    l = null;
                                0 === f++ % a && e.push([]);
                                try {
                                    for (
                                        var m = E(e), p = m.next();
                                        !p.done;
                                        p = m.next()
                                    ) {
                                        var q = p.value;
                                        q.push(c);
                                        b <= q.length &&
                                            ((l =
                                                null !== l && void 0 !== l
                                                    ? l
                                                    : []),
                                            l.push(q));
                                    }
                                } catch (N) {
                                    g = { error: N };
                                } finally {
                                    try {
                                        p &&
                                            !p.done &&
                                            (h = m.return) &&
                                            h.call(m);
                                    } finally {
                                        if (g) throw g.error;
                                    }
                                }
                                if (l)
                                    try {
                                        for (
                                            var za = E(l), R = za.next();
                                            !R.done;
                                            R = za.next()
                                        )
                                            (q = R.value), K(e, q), d.next(q);
                                    } catch (N) {
                                        n = { error: N };
                                    } finally {
                                        try {
                                            R &&
                                                !R.done &&
                                                (r = za.return) &&
                                                r.call(za);
                                        } finally {
                                            if (n) throw n.error;
                                        }
                                    }
                            },
                            function () {
                                var a, b;
                                try {
                                    for (
                                        var c = E(e), f = c.next();
                                        !f.done;
                                        f = c.next()
                                    )
                                        d.next(f.value);
                                } catch (r) {
                                    a = { error: r };
                                } finally {
                                    try {
                                        f &&
                                            !f.done &&
                                            (b = c.return) &&
                                            b.call(c);
                                    } finally {
                                        if (a) throw a.error;
                                    }
                                }
                                d.complete();
                            },
                            void 0,
                            function () {
                                e = null;
                            }
                        )
                    );
                });
            },
            bufferTime: function (b) {
                for (var a, c, d = [], e = 1; e < arguments.length; e++)
                    d[e - 1] = arguments[e];
                var f = null !== (a = L(d)) && void 0 !== a ? a : J,
                    g = null !== (c = d[0]) && void 0 !== c ? c : null,
                    k = d[1] || Infinity;
                return p(function (a, c) {
                    var d = [],
                        e = !1,
                        h = function (a) {
                            var b = a.buffer;
                            a.subs.unsubscribe();
                            K(d, a);
                            c.next(b);
                            e && n();
                        },
                        n = function () {
                            if (d) {
                                var a = new A();
                                c.add(a);
                                var e = { buffer: [], subs: a };
                                d.push(e);
                                a.add(
                                    f.schedule(function () {
                                        return h(e);
                                    }, b)
                                );
                            }
                        };
                    null !== g && 0 <= g
                        ? c.add(
                              f.schedule(function () {
                                  n();
                                  !this.closed && c.add(this.schedule(null, g));
                              }, g)
                          )
                        : (e = !0);
                    n();
                    var m = new l(
                        c,
                        function (a) {
                            var b,
                                c,
                                e = d.slice();
                            try {
                                for (
                                    var f = E(e), g = f.next();
                                    !g.done;
                                    g = f.next()
                                ) {
                                    var n = g.value,
                                        r = n.buffer;
                                    r.push(a);
                                    k <= r.length && h(n);
                                }
                            } catch (Hd) {
                                b = { error: Hd };
                            } finally {
                                try {
                                    g && !g.done && (c = f.return) && c.call(f);
                                } finally {
                                    if (b) throw b.error;
                                }
                            }
                        },
                        function () {
                            for (; null === d || void 0 === d ? 0 : d.length; )
                                c.next(d.shift().buffer);
                            null === m || void 0 === m
                                ? void 0
                                : m.unsubscribe();
                            c.complete();
                            c.unsubscribe();
                        },
                        void 0,
                        function () {
                            return (d = null);
                        }
                    );
                    a.subscribe(m);
                });
            },
            bufferToggle: function (b, a) {
                return p(function (c, d) {
                    var e = [];
                    v(b).subscribe(
                        new l(
                            d,
                            function (b) {
                                var c = [];
                                e.push(c);
                                var f = new A();
                                f.add(
                                    v(a(b)).subscribe(
                                        new l(
                                            d,
                                            function () {
                                                K(e, c);
                                                d.next(c);
                                                f.unsubscribe();
                                            },
                                            B
                                        )
                                    )
                                );
                            },
                            B
                        )
                    );
                    c.subscribe(
                        new l(
                            d,
                            function (a) {
                                var b, c;
                                try {
                                    for (
                                        var d = E(e), f = d.next();
                                        !f.done;
                                        f = d.next()
                                    )
                                        f.value.push(a);
                                } catch (r) {
                                    b = { error: r };
                                } finally {
                                    try {
                                        f &&
                                            !f.done &&
                                            (c = d.return) &&
                                            c.call(d);
                                    } finally {
                                        if (b) throw b.error;
                                    }
                                }
                            },
                            function () {
                                for (; 0 < e.length; ) d.next(e.shift());
                                d.complete();
                            }
                        )
                    );
                });
            },
            bufferWhen: function (b) {
                return p(function (a, c) {
                    var d = null,
                        e = null,
                        f = function () {
                            null === e || void 0 === e
                                ? void 0
                                : e.unsubscribe();
                            var a = d;
                            d = [];
                            a && c.next(a);
                            v(b()).subscribe((e = new l(c, f, B)));
                        };
                    f();
                    a.subscribe(
                        new l(
                            c,
                            function (a) {
                                return null === d || void 0 === d
                                    ? void 0
                                    : d.push(a);
                            },
                            function () {
                                d && c.next(d);
                                c.complete();
                            },
                            void 0,
                            function () {
                                return (d = e = null);
                            }
                        )
                    );
                });
            },
            catchError: Xb,
            combineAll: ac,
            combineLatestAll: ac,
            combineLatest: Ya,
            combineLatestWith: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                return Ya.apply(void 0, y([], x(b)));
            },
            concat: bc,
            concatAll: Va,
            concatMap: Za,
            concatMapTo: function (b, a) {
                return q(a)
                    ? Za(function () {
                          return b;
                      }, a)
                    : Za(function () {
                          return b;
                      });
            },
            concatWith: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                return bc.apply(void 0, y([], x(b)));
            },
            connect: $a,
            count: function (b) {
                return oa(function (a, c, d) {
                    return !b || b(c, d) ? a + 1 : a;
                }, 0);
            },
            debounce: function (b) {
                return p(function (a, c) {
                    var d = !1,
                        e = null,
                        f = null,
                        g = function () {
                            null === f || void 0 === f
                                ? void 0
                                : f.unsubscribe();
                            f = null;
                            if (d) {
                                d = !1;
                                var a = e;
                                e = null;
                                c.next(a);
                            }
                        };
                    a.subscribe(
                        new l(
                            c,
                            function (a) {
                                null === f || void 0 === f
                                    ? void 0
                                    : f.unsubscribe();
                                d = !0;
                                e = a;
                                f = new l(c, g, B);
                                v(b(a)).subscribe(f);
                            },
                            function () {
                                g();
                                c.complete();
                            },
                            void 0,
                            function () {
                                e = f = null;
                            }
                        )
                    );
                });
            },
            debounceTime: function (b, a) {
                void 0 === a && (a = J);
                return p(function (c, d) {
                    function e() {
                        var c = k + b,
                            d = a.now();
                        d < c ? (f = this.schedule(void 0, c - d)) : h();
                    }
                    var f = null,
                        g = null,
                        k = null,
                        h = function () {
                            if (f) {
                                f.unsubscribe();
                                f = null;
                                var a = g;
                                g = null;
                                d.next(a);
                            }
                        };
                    c.subscribe(
                        new l(
                            d,
                            function (c) {
                                g = c;
                                k = a.now();
                                f || (f = a.schedule(e, b));
                            },
                            function () {
                                h();
                                d.complete();
                            },
                            void 0,
                            function () {
                                g = f = null;
                            }
                        )
                    );
                });
            },
            defaultIfEmpty: Ca,
            delay: function (b, a) {
                void 0 === a && (a = J);
                var c = ma(b, a);
                return ab(function () {
                    return c;
                });
            },
            delayWhen: ab,
            dematerialize: function () {
                return p(function (b, a) {
                    b.subscribe(
                        new l(a, function (b) {
                            return ya(b, a);
                        })
                    );
                });
            },
            distinct: function (b, a) {
                return p(function (c, d) {
                    var e = new Set();
                    c.subscribe(
                        new l(d, function (a) {
                            var c = b ? b(a) : a;
                            e.has(c) || (e.add(c), d.next(a));
                        })
                    );
                    null === a || void 0 === a
                        ? void 0
                        : a.subscribe(
                              new l(
                                  d,
                                  function () {
                                      return e.clear();
                                  },
                                  B
                              )
                          );
                });
            },
            distinctUntilChanged: ec,
            distinctUntilKeyChanged: function (b, a) {
                return ec(function (c, d) {
                    return a ? a(c[b], d[b]) : c[b] === d[b];
                });
            },
            elementAt: function (b, a) {
                if (0 > b) throw new lb();
                var c = 2 <= arguments.length;
                return function (d) {
                    return d.pipe(
                        O(function (a, c) {
                            return c === b;
                        }),
                        ea(1),
                        c
                            ? Ca(a)
                            : Da(function () {
                                  return new lb();
                              })
                    );
                };
            },
            endWith: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                return function (a) {
                    return ka(a, Ra.apply(void 0, y([], x(b))));
                };
            },
            every: function (b, a) {
                return p(function (c, d) {
                    var e = 0;
                    c.subscribe(
                        new l(
                            d,
                            function (f) {
                                b.call(a, f, e++, c) ||
                                    (d.next(!1), d.complete());
                            },
                            function () {
                                d.next(!0);
                                d.complete();
                            }
                        )
                    );
                });
            },
            exhaust: fc,
            exhaustAll: fc,
            exhaustMap: gc,
            expand: function (b, a, c) {
                void 0 === a && (a = Infinity);
                a = 1 > (a || 0) ? Infinity : a;
                return p(function (d, e) {
                    return Ua(d, e, b, a, void 0, !0, c);
                });
            },
            filter: O,
            finalize: function (b) {
                return p(function (a, c) {
                    try {
                        a.subscribe(c);
                    } finally {
                        c.add(b);
                    }
                });
            },
            find: function (b, a) {
                return p(hc(b, a, 'value'));
            },
            findIndex: function (b, a) {
                return p(hc(b, a, 'index'));
            },
            first: function (b, a) {
                var c = 2 <= arguments.length;
                return function (d) {
                    return d.pipe(
                        b
                            ? O(function (a, c) {
                                  return b(a, c, d);
                              })
                            : D,
                        ea(1),
                        c
                            ? Ca(a)
                            : Da(function () {
                                  return new V();
                              })
                    );
                };
            },
            groupBy: function (b, a, c, d) {
                return p(function (e, f) {
                    function g(a, b) {
                        var c = new u(function (a) {
                            m.activeGroups++;
                            var c = b.subscribe(a);
                            return function () {
                                c.unsubscribe();
                                0 === --m.activeGroups &&
                                    m.teardownAttempted &&
                                    m.unsubscribe();
                            };
                        });
                        c.key = a;
                        return c;
                    }
                    var k;
                    a && 'function' !== typeof a
                        ? ((c = a.duration), (k = a.element), (d = a.connector))
                        : (k = a);
                    var h = new Map(),
                        n = function (a) {
                            h.forEach(a);
                            a(f);
                        },
                        r = function (a) {
                            return n(function (b) {
                                return b.error(a);
                            });
                        },
                        m = new Fd(
                            f,
                            function (a) {
                                try {
                                    var e = b(a),
                                        n = h.get(e);
                                    if (!n) {
                                        h.set(e, (n = d ? d() : new C()));
                                        var z = g(e, n);
                                        f.next(z);
                                        if (c) {
                                            var p = new l(
                                                n,
                                                function () {
                                                    n.complete();
                                                    null === p || void 0 === p
                                                        ? void 0
                                                        : p.unsubscribe();
                                                },
                                                void 0,
                                                void 0,
                                                function () {
                                                    return h.delete(e);
                                                }
                                            );
                                            m.add(v(c(z)).subscribe(p));
                                        }
                                    }
                                    n.next(k ? k(a) : a);
                                } catch (N) {
                                    r(N);
                                }
                            },
                            function () {
                                return n(function (a) {
                                    return a.complete();
                                });
                            },
                            r,
                            function () {
                                return h.clear();
                            }
                        );
                    e.subscribe(m);
                });
            },
            ignoreElements: cc,
            isEmpty: function () {
                return p(function (b, a) {
                    b.subscribe(
                        new l(
                            a,
                            function () {
                                a.next(!1);
                                a.complete();
                            },
                            function () {
                                a.next(!0);
                                a.complete();
                            }
                        )
                    );
                });
            },
            last: function (b, a) {
                var c = 2 <= arguments.length;
                return function (d) {
                    return d.pipe(
                        b
                            ? O(function (a, c) {
                                  return b(a, c, d);
                              })
                            : D,
                        ic(1),
                        c
                            ? Ca(a)
                            : Da(function () {
                                  return new V();
                              })
                    );
                };
            },
            map: M,
            mapTo: dc,
            materialize: function () {
                return p(function (b, a) {
                    b.subscribe(
                        new l(
                            a,
                            function (b) {
                                a.next(Ha.createNext(b));
                            },
                            function () {
                                a.next(Ha.createComplete());
                                a.complete();
                            },
                            function (b) {
                                a.next(Ha.createError(b));
                                a.complete();
                            }
                        )
                    );
                });
            },
            max: function (b) {
                return oa(
                    q(b)
                        ? function (a, c) {
                              return 0 < b(a, c) ? a : c;
                          }
                        : function (a, b) {
                              return a > b ? a : b;
                          }
                );
            },
            merge: jc,
            mergeAll: Ba,
            flatMap: H,
            mergeMap: H,
            mergeMapTo: function (b, a, c) {
                void 0 === c && (c = Infinity);
                if (q(a))
                    return H(
                        function () {
                            return b;
                        },
                        a,
                        c
                    );
                'number' === typeof a && (c = a);
                return H(function () {
                    return b;
                }, c);
            },
            mergeScan: function (b, a, c) {
                void 0 === c && (c = Infinity);
                return p(function (d, e) {
                    var f = a;
                    return Ua(
                        d,
                        e,
                        function (a, c) {
                            return b(f, a, c);
                        },
                        c,
                        function (a) {
                            f = a;
                        },
                        !1,
                        void 0,
                        function () {
                            return (f = null);
                        }
                    );
                });
            },
            mergeWith: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                return jc.apply(void 0, y([], x(b)));
            },
            min: function (b) {
                return oa(
                    q(b)
                        ? function (a, c) {
                              return 0 > b(a, c) ? a : c;
                          }
                        : function (a, b) {
                              return a < b ? a : b;
                          }
                );
            },
            multicast: bb,
            observeOn: Kb,
            onErrorResumeNext: Tb,
            pairwise: function () {
                return p(function (b, a) {
                    var c,
                        d = !1;
                    b.subscribe(
                        new l(a, function (b) {
                            var e = c;
                            c = b;
                            d && a.next([e, b]);
                            d = !0;
                        })
                    );
                });
            },
            partition: function (b, a) {
                return function (c) {
                    return [O(b, a)(c), O(Ub(b, a))(c)];
                };
            },
            pluck: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                var c = b.length;
                if (0 === c) throw Error('list of properties cannot be empty.');
                return M(function (a) {
                    var d = a;
                    for (a = 0; a < c; a++)
                        if (
                            ((d =
                                null === d || void 0 === d ? void 0 : d[b[a]]),
                            'undefined' === typeof d)
                        )
                            return;
                    return d;
                });
            },
            publish: function (b) {
                return b
                    ? function (a) {
                          return $a(b)(a);
                      }
                    : function (a) {
                          return bb(new C())(a);
                      };
            },
            publishBehavior: function (b) {
                return function (a) {
                    var c = new yc(b);
                    return new Ea(a, function () {
                        return c;
                    });
                };
            },
            publishLast: function () {
                return function (b) {
                    var a = new Ta();
                    return new Ea(b, function () {
                        return a;
                    });
                };
            },
            publishReplay: function (b, a, c, d) {
                c && !q(c) && (d = c);
                var e = q(c) ? c : void 0;
                return function (c) {
                    return bb(new ga(b, a, d), e)(c);
                };
            },
            race: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                return kc.apply(void 0, y([], x(U(b))));
            },
            raceWith: kc,
            reduce: oa,
            repeat: function (b) {
                void 0 === b && (b = Infinity);
                return 0 >= b
                    ? function () {
                          return I;
                      }
                    : p(function (a, c) {
                          var d = 0,
                              e,
                              f = function () {
                                  var g = !1;
                                  e = a.subscribe(
                                      new l(c, void 0, function () {
                                          ++d < b
                                              ? e
                                                  ? (e.unsubscribe(),
                                                    (e = null),
                                                    f())
                                                  : (g = !0)
                                              : c.complete();
                                      })
                                  );
                                  g && (e.unsubscribe(), (e = null), f());
                              };
                          f();
                      });
            },
            repeatWhen: function (b) {
                return p(function (a, c) {
                    var d,
                        e = !1,
                        f,
                        g = !1,
                        k = !1,
                        h = function () {
                            f ||
                                ((f = new C()),
                                b(f).subscribe(
                                    new l(
                                        c,
                                        function () {
                                            d ? n() : (e = !0);
                                        },
                                        function () {
                                            g = !0;
                                            k && g && c.complete();
                                        }
                                    )
                                ));
                            return f;
                        },
                        n = function () {
                            k = !1;
                            d = a.subscribe(
                                new l(c, void 0, function () {
                                    (((k = !0), g) && (c.complete(), !0)) ||
                                        h().next();
                                })
                            );
                            e && (d.unsubscribe(), (d = null), (e = !1), n());
                        };
                    n();
                });
            },
            retry: function (b) {
                void 0 === b && (b = Infinity);
                b = b && 'object' === typeof b ? b : { count: b };
                var a = b.count;
                b = b.resetOnSuccess;
                var c = void 0 === b ? !1 : b;
                return 0 >= a
                    ? D
                    : p(function (b, e) {
                          var d = 0,
                              g,
                              k = function () {
                                  var f = !1;
                                  g = b.subscribe(
                                      new l(
                                          e,
                                          function (a) {
                                              c && (d = 0);
                                              e.next(a);
                                          },
                                          void 0,
                                          function (b) {
                                              d++ < a
                                                  ? g
                                                      ? (g.unsubscribe(),
                                                        (g = null),
                                                        k())
                                                      : (f = !0)
                                                  : e.error(b);
                                          }
                                      )
                                  );
                                  f && (g.unsubscribe(), (g = null), k());
                              };
                          k();
                      });
            },
            retryWhen: function (b) {
                return p(function (a, c) {
                    var d,
                        e = !1,
                        f,
                        g = function () {
                            d = a.subscribe(
                                new l(c, void 0, void 0, function (a) {
                                    f ||
                                        ((f = new C()),
                                        b(f).subscribe(
                                            new l(c, function () {
                                                return d ? g() : (e = !0);
                                            })
                                        ));
                                    f && f.next(a);
                                })
                            );
                            e && (d.unsubscribe(), (d = null), (e = !1), g());
                        };
                    g();
                });
            },
            refCount: tb,
            sample: lc,
            sampleTime: function (b, a) {
                void 0 === a && (a = J);
                return lc(Sb(b, a));
            },
            scan: mc,
            sequenceEqual: function (b, a) {
                void 0 === a &&
                    (a = function (a, b) {
                        return a === b;
                    });
                return p(function (c, d) {
                    var e = { buffer: [], complete: !1 },
                        f = { buffer: [], complete: !1 },
                        g = function (b, c) {
                            var e = new l(
                                d,
                                function (e) {
                                    var f = c.buffer,
                                        g = c.complete;
                                    0 === f.length
                                        ? g
                                            ? (d.next(!1), d.complete())
                                            : b.buffer.push(e)
                                        : a(e, f.shift()) ||
                                          (d.next(!1), d.complete());
                                },
                                function () {
                                    b.complete = !0;
                                    var a = c.buffer;
                                    c.complete &&
                                        (d.next(0 === a.length), d.complete());
                                    null === e || void 0 === e
                                        ? void 0
                                        : e.unsubscribe();
                                }
                            );
                            return e;
                        };
                    c.subscribe(g(e, f));
                    b.subscribe(g(f, e));
                });
            },
            share: nc,
            shareReplay: function (b, a, c) {
                var d,
                    e,
                    f,
                    g = !1;
                b && 'object' === typeof b
                    ? ((f =
                          null !== (d = b.bufferSize) && void 0 !== d
                              ? d
                              : Infinity),
                      (a =
                          null !== (e = b.windowTime) && void 0 !== e
                              ? e
                              : Infinity),
                      (g = !!b.refCount),
                      (c = b.scheduler))
                    : (f = null !== b && void 0 !== b ? b : Infinity);
                return nc({
                    connector: function () {
                        return new ga(f, a, c);
                    },
                    resetOnError: !0,
                    resetOnComplete: !1,
                    resetOnRefCountZero: g,
                });
            },
            single: function (b) {
                return p(function (a, c) {
                    var d = !1,
                        e,
                        f = !1,
                        g = 0;
                    a.subscribe(
                        new l(
                            c,
                            function (k) {
                                f = !0;
                                if (!b || b(k, g++, a))
                                    d &&
                                        c.error(
                                            new Ec('Too many matching values')
                                        ),
                                        (d = !0),
                                        (e = k);
                            },
                            function () {
                                d
                                    ? (c.next(e), c.complete())
                                    : c.error(
                                          f
                                              ? new Dc('No matching values')
                                              : new V()
                                      );
                            }
                        )
                    );
                });
            },
            skip: function (b) {
                return O(function (a, c) {
                    return b <= c;
                });
            },
            skipLast: function (b) {
                return 0 >= b
                    ? D
                    : p(function (a, c) {
                          var d = Array(b),
                              e = 0;
                          a.subscribe(
                              new l(c, function (a) {
                                  var f = e++;
                                  if (f < b) d[f] = a;
                                  else {
                                      var f = f % b,
                                          k = d[f];
                                      d[f] = a;
                                      c.next(k);
                                  }
                              })
                          );
                          return function () {
                              d = null;
                          };
                      });
            },
            skipUntil: function (b) {
                return p(function (a, c) {
                    var d = !1,
                        e = new l(
                            c,
                            function () {
                                null === e || void 0 === e
                                    ? void 0
                                    : e.unsubscribe();
                                d = !0;
                            },
                            B
                        );
                    v(b).subscribe(e);
                    a.subscribe(
                        new l(c, function (a) {
                            return d && c.next(a);
                        })
                    );
                });
            },
            skipWhile: function (b) {
                return p(function (a, c) {
                    var d = !1,
                        e = 0;
                    a.subscribe(
                        new l(c, function (a) {
                            return (d || (d = !b(a, e++))) && c.next(a);
                        })
                    );
                });
            },
            startWith: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                var c = L(b);
                return p(function (a, e) {
                    (c ? ka(b, a, c) : ka(b, a)).subscribe(e);
                });
            },
            subscribeOn: Jb,
            switchAll: function () {
                return pa(D);
            },
            switchMap: pa,
            switchMapTo: function (b, a) {
                return q(a)
                    ? pa(function () {
                          return b;
                      }, a)
                    : pa(function () {
                          return b;
                      });
            },
            switchScan: function (b, a) {
                return p(function (c, d) {
                    var e = a;
                    pa(
                        function (a, c) {
                            return b(e, a, c);
                        },
                        function (a, b) {
                            return (e = b), b;
                        }
                    )(c).subscribe(d);
                    return function () {
                        e = null;
                    };
                });
            },
            take: ea,
            takeLast: ic,
            takeUntil: function (b) {
                return p(function (a, c) {
                    v(b).subscribe(
                        new l(
                            c,
                            function () {
                                return c.complete();
                            },
                            B
                        )
                    );
                    !c.closed && a.subscribe(c);
                });
            },
            takeWhile: function (b, a) {
                void 0 === a && (a = !1);
                return p(function (c, d) {
                    var e = 0;
                    c.subscribe(
                        new l(d, function (c) {
                            var f = b(c, e++);
                            (f || a) && d.next(c);
                            !f && d.complete();
                        })
                    );
                });
            },
            tap: function (b, a, c) {
                var d = q(b) || a || c ? { next: b, error: a, complete: c } : b;
                return d
                    ? p(function (a, b) {
                          a.subscribe(
                              new l(
                                  b,
                                  function (a) {
                                      var c;
                                      null === (c = d.next) || void 0 === c
                                          ? void 0
                                          : c.call(d, a);
                                      b.next(a);
                                  },
                                  function () {
                                      var a;
                                      null === (a = d.complete) || void 0 === a
                                          ? void 0
                                          : a.call(d);
                                      b.complete();
                                  },
                                  function (a) {
                                      var c;
                                      null === (c = d.error) || void 0 === c
                                          ? void 0
                                          : c.call(d, a);
                                      b.error(a);
                                  }
                              )
                          );
                      })
                    : D;
            },
            throttle: oc,
            throttleTime: function (b, a, c) {
                void 0 === a && (a = J);
                void 0 === c && (c = pc);
                var d = ma(b, a);
                return oc(function () {
                    return d;
                }, c);
            },
            throwIfEmpty: Da,
            timeInterval: function (b) {
                void 0 === b && (b = na);
                return function (a) {
                    return la(function () {
                        return a.pipe(
                            mc(
                                function (a, d) {
                                    a = a.current;
                                    return {
                                        value: d,
                                        current: b.now(),
                                        last: a,
                                    };
                                },
                                {
                                    current: b.now(),
                                    value: void 0,
                                    last: void 0,
                                }
                            ),
                            M(function (a) {
                                return new Gd(a.value, a.current - a.last);
                            })
                        );
                    });
                };
            },
            timeout: Hb,
            timeoutWith: function (b, a, c) {
                var d, e;
                c = null !== c && void 0 !== c ? c : na;
                Sa(b) ? (d = b) : 'number' === typeof b && (e = b);
                if (a)
                    b = function () {
                        return a;
                    };
                else throw new TypeError('No observable provided to switch to');
                if (null == d && null == e)
                    throw new TypeError('No timeout provided.');
                return Hb({ first: d, each: e, scheduler: c, with: b });
            },
            timestamp: function (b) {
                void 0 === b && (b = fa);
                return M(function (a) {
                    return { value: a, timestamp: b.now() };
                });
            },
            toArray: Zb,
            window: function (b) {
                return p(function (a, c) {
                    var d = new C();
                    c.next(d.asObservable());
                    var e = function (a) {
                        d.error(a);
                        c.error(a);
                    };
                    a.subscribe(
                        new l(
                            c,
                            function (a) {
                                return null === d || void 0 === d
                                    ? void 0
                                    : d.next(a);
                            },
                            function () {
                                d.complete();
                                c.complete();
                            },
                            e
                        )
                    );
                    b.subscribe(
                        new l(
                            c,
                            function () {
                                d.complete();
                                c.next((d = new C()));
                            },
                            B,
                            e
                        )
                    );
                    return function () {
                        null === d || void 0 === d ? void 0 : d.unsubscribe();
                        d = null;
                    };
                });
            },
            windowCount: function (b, a) {
                void 0 === a && (a = 0);
                var c = 0 < a ? a : b;
                return p(function (a, e) {
                    var d = [new C()],
                        g = 0;
                    e.next(d[0].asObservable());
                    a.subscribe(
                        new l(
                            e,
                            function (a) {
                                var f, k;
                                try {
                                    for (
                                        var r = E(d), l = r.next();
                                        !l.done;
                                        l = r.next()
                                    )
                                        l.value.next(a);
                                } catch (t) {
                                    f = { error: t };
                                } finally {
                                    try {
                                        l &&
                                            !l.done &&
                                            (k = r.return) &&
                                            k.call(r);
                                    } finally {
                                        if (f) throw f.error;
                                    }
                                }
                                a = g - b + 1;
                                0 <= a && 0 === a % c && d.shift().complete();
                                0 === ++g % c &&
                                    ((a = new C()),
                                    d.push(a),
                                    e.next(a.asObservable()));
                            },
                            function () {
                                for (; 0 < d.length; ) d.shift().complete();
                                e.complete();
                            },
                            function (a) {
                                for (; 0 < d.length; ) d.shift().error(a);
                                e.error(a);
                            },
                            function () {
                                d = null;
                            }
                        )
                    );
                });
            },
            windowTime: function (b) {
                for (var a, c, d = [], e = 1; e < arguments.length; e++)
                    d[e - 1] = arguments[e];
                var f = null !== (a = L(d)) && void 0 !== a ? a : J,
                    g = null !== (c = d[0]) && void 0 !== c ? c : null,
                    k = d[1] || Infinity;
                return p(function (a, c) {
                    var d = [],
                        e = !1,
                        h = function (a) {
                            var b = a.subs;
                            a.window.complete();
                            b.unsubscribe();
                            K(d, a);
                            e && n();
                        },
                        n = function () {
                            if (d) {
                                var a = new A();
                                c.add(a);
                                var e = new C(),
                                    g = { window: e, subs: a, seen: 0 };
                                d.push(g);
                                c.next(e.asObservable());
                                a.add(
                                    f.schedule(function () {
                                        return h(g);
                                    }, b)
                                );
                            }
                        };
                    null !== g && 0 <= g
                        ? c.add(
                              f.schedule(function () {
                                  n();
                                  !this.closed && c.add(this.schedule(null, g));
                              }, g)
                          )
                        : (e = !0);
                    n();
                    var m = function (a) {
                        d.slice().forEach(function (b) {
                            return a(b.window);
                        });
                        a(c);
                        c.unsubscribe();
                    };
                    a.subscribe(
                        new l(
                            c,
                            function (a) {
                                d.slice().forEach(function (b) {
                                    b.window.next(a);
                                    k <= ++b.seen && h(b);
                                });
                            },
                            function () {
                                return m(function (a) {
                                    return a.complete();
                                });
                            },
                            function (a) {
                                return m(function (b) {
                                    return b.error(a);
                                });
                            }
                        )
                    );
                    return function () {
                        d = null;
                    };
                });
            },
            windowToggle: function (b, a) {
                return p(function (c, d) {
                    var e = [],
                        f = function (a) {
                            for (; 0 < e.length; ) e.shift().error(a);
                            d.error(a);
                        };
                    v(b).subscribe(
                        new l(
                            d,
                            function (b) {
                                var c = new C();
                                e.push(c);
                                var g = new A(),
                                    n;
                                try {
                                    n = v(a(b));
                                } catch (r) {
                                    f(r);
                                    return;
                                }
                                d.next(c.asObservable());
                                g.add(
                                    n.subscribe(
                                        new l(
                                            d,
                                            function () {
                                                K(e, c);
                                                c.complete();
                                                g.unsubscribe();
                                            },
                                            B,
                                            f
                                        )
                                    )
                                );
                            },
                            B
                        )
                    );
                    c.subscribe(
                        new l(
                            d,
                            function (a) {
                                var b,
                                    c,
                                    d = e.slice();
                                try {
                                    for (
                                        var f = E(d), g = f.next();
                                        !g.done;
                                        g = f.next()
                                    )
                                        g.value.next(a);
                                } catch (t) {
                                    b = { error: t };
                                } finally {
                                    try {
                                        g &&
                                            !g.done &&
                                            (c = f.return) &&
                                            c.call(f);
                                    } finally {
                                        if (b) throw b.error;
                                    }
                                }
                            },
                            function () {
                                for (; 0 < e.length; ) e.shift().complete();
                                d.complete();
                            },
                            f,
                            function () {
                                for (; 0 < e.length; ) e.shift().unsubscribe();
                            }
                        )
                    );
                });
            },
            windowWhen: function (b) {
                return p(function (a, c) {
                    var d,
                        e,
                        f = function (a) {
                            d.error(a);
                            c.error(a);
                        },
                        g = function () {
                            null === e || void 0 === e
                                ? void 0
                                : e.unsubscribe();
                            null === d || void 0 === d ? void 0 : d.complete();
                            d = new C();
                            c.next(d.asObservable());
                            var a;
                            try {
                                a = v(b());
                            } catch (h) {
                                f(h);
                                return;
                            }
                            a.subscribe((e = new l(c, g, g, f)));
                        };
                    g();
                    a.subscribe(
                        new l(
                            c,
                            function (a) {
                                return d.next(a);
                            },
                            function () {
                                d.complete();
                                c.complete();
                            },
                            f,
                            function () {
                                null === e || void 0 === e
                                    ? void 0
                                    : e.unsubscribe();
                                d = null;
                            }
                        )
                    );
                });
            },
            withLatestFrom: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                var c = ja(b);
                return p(function (a, e) {
                    for (
                        var d = b.length,
                            g = Array(d),
                            k = b.map(function () {
                                return !1;
                            }),
                            h = !1,
                            n = function (a) {
                                v(b[a]).subscribe(
                                    new l(
                                        e,
                                        function (b) {
                                            g[a] = b;
                                            h ||
                                                k[a] ||
                                                ((k[a] = !0),
                                                (h = k.every(D)) && (k = null));
                                        },
                                        B
                                    )
                                );
                            },
                            m = 0;
                        m < d;
                        m++
                    )
                        n(m);
                    a.subscribe(
                        new l(e, function (a) {
                            h &&
                                ((a = y([a], x(g))),
                                e.next(c ? c.apply(void 0, y([], x(a))) : a));
                        })
                    );
                });
            },
            zip: qc,
            zipAll: function (b) {
                return $b(Xa, b);
            },
            zipWith: function () {
                for (var b = [], a = 0; a < arguments.length; a++)
                    b[a] = arguments[a];
                return qc.apply(void 0, y([], x(b)));
            },
        }),
        va = (function () {
            return function (b, a) {
                void 0 === a && (a = Infinity);
                this.subscribedFrame = b;
                this.unsubscribedFrame = a;
            };
        })(),
        Gc = (function () {
            function b() {
                this.subscriptions = [];
            }
            b.prototype.logSubscribedFrame = function () {
                this.subscriptions.push(new va(this.scheduler.now()));
                return this.subscriptions.length - 1;
            };
            b.prototype.logUnsubscribedFrame = function (a) {
                var b = this.subscriptions;
                b[a] = new va(b[a].subscribedFrame, this.scheduler.now());
            };
            return b;
        })(),
        mb = (function (b) {
            function a(a, d) {
                var c =
                    b.call(this, function (a) {
                        var b = this,
                            c = b.logSubscribedFrame(),
                            d = new A();
                        d.add(
                            new A(function () {
                                b.logUnsubscribedFrame(c);
                            })
                        );
                        b.scheduleMessages(a);
                        return d;
                    }) || this;
                c.messages = a;
                c.subscriptions = [];
                c.scheduler = d;
                return c;
            }
            w(a, b);
            a.prototype.scheduleMessages = function (a) {
                for (var b = this.messages.length, c = 0; c < b; c++) {
                    var f = this.messages[c];
                    a.add(
                        this.scheduler.schedule(
                            function (a) {
                                ya(a.message.notification, a.subscriber);
                            },
                            f.frame,
                            { message: f, subscriber: a }
                        )
                    );
                }
            };
            return a;
        })(u);
    rc(mb, [Gc]);
    var Hc = (function (b) {
        function a(a, d) {
            var c = b.call(this) || this;
            c.messages = a;
            c.subscriptions = [];
            c.scheduler = d;
            return c;
        }
        w(a, b);
        a.prototype._subscribe = function (a) {
            var c = this,
                e = c.logSubscribedFrame(),
                f = new A();
            f.add(
                new A(function () {
                    c.logUnsubscribedFrame(e);
                })
            );
            f.add(b.prototype._subscribe.call(this, a));
            return f;
        };
        a.prototype.setup = function () {
            for (
                var a = this,
                    b = a.messages.length,
                    e = function (b) {
                        (function () {
                            var c = a.messages[b],
                                d = c.notification;
                            a.scheduler.schedule(function () {
                                ya(d, a);
                            }, c.frame);
                        })();
                    },
                    f = 0;
                f < b;
                f++
            )
                e(f);
        };
        return a;
    })(C);
    rc(Hc, [Gc]);
    var Jd = (function (b) {
            function a(a) {
                var c = b.call(this, kb, 750) || this;
                c.assertDeepEqual = a;
                c.hotObservables = [];
                c.coldObservables = [];
                c.flushTests = [];
                c.runMode = !1;
                return c;
            }
            w(a, b);
            a.prototype.createTime = function (b) {
                b = this.runMode ? b.trim().indexOf('|') : b.indexOf('|');
                if (-1 === b)
                    throw Error(
                        'marble diagram for time should have a completion marker "|"'
                    );
                return b * a.frameTimeFactor;
            };
            a.prototype.createColdObservable = function (b, d, e) {
                if (-1 !== b.indexOf('^'))
                    throw Error(
                        'cold observable cannot have subscription offset "^"'
                    );
                if (-1 !== b.indexOf('!'))
                    throw Error(
                        'cold observable cannot have unsubscription marker "!"'
                    );
                b = a.parseMarbles(b, d, e, void 0, this.runMode);
                b = new mb(b, this);
                this.coldObservables.push(b);
                return b;
            };
            a.prototype.createHotObservable = function (b, d, e) {
                if (-1 !== b.indexOf('!'))
                    throw Error(
                        'hot observable cannot have unsubscription marker "!"'
                    );
                b = a.parseMarbles(b, d, e, void 0, this.runMode);
                b = new Hc(b, this);
                this.hotObservables.push(b);
                return b;
            };
            a.prototype.materializeInnerObservable = function (a, b) {
                var c = this,
                    d = [];
                a.subscribe(
                    function (a) {
                        d.push({
                            frame: c.frame - b,
                            notification: G('N', a, void 0),
                        });
                    },
                    function (a) {
                        d.push({
                            frame: c.frame - b,
                            notification: G('E', void 0, a),
                        });
                    },
                    function () {
                        d.push({ frame: c.frame - b, notification: ra });
                    }
                );
                return d;
            };
            a.prototype.expectObservable = function (b, d) {
                var c = this;
                void 0 === d && (d = null);
                var f = [],
                    g = { actual: f, ready: !1 };
                d = a.parseMarblesAsSubscriptions(d, this.runMode);
                var k = Infinity === d.subscribedFrame ? 0 : d.subscribedFrame;
                d = d.unsubscribedFrame;
                var h;
                this.schedule(function () {
                    h = b.subscribe(
                        function (a) {
                            a =
                                a instanceof u
                                    ? c.materializeInnerObservable(a, c.frame)
                                    : a;
                            f.push({
                                frame: c.frame,
                                notification: G('N', a, void 0),
                            });
                        },
                        function (a) {
                            f.push({
                                frame: c.frame,
                                notification: G('E', void 0, a),
                            });
                        },
                        function () {
                            f.push({ frame: c.frame, notification: ra });
                        }
                    );
                }, k);
                Infinity !== d &&
                    this.schedule(function () {
                        return h.unsubscribe();
                    }, d);
                this.flushTests.push(g);
                var l = this.runMode;
                return {
                    toBe: function (b, c, d) {
                        g.ready = !0;
                        g.expected = a.parseMarbles(b, c, d, !0, l);
                    },
                    toEqual: function (a) {
                        g.ready = !0;
                        g.expected = [];
                        c.schedule(function () {
                            h = a.subscribe(
                                function (a) {
                                    a =
                                        a instanceof u
                                            ? c.materializeInnerObservable(
                                                  a,
                                                  c.frame
                                              )
                                            : a;
                                    g.expected.push({
                                        frame: c.frame,
                                        notification: G('N', a, void 0),
                                    });
                                },
                                function (a) {
                                    g.expected.push({
                                        frame: c.frame,
                                        notification: G('E', void 0, a),
                                    });
                                },
                                function () {
                                    g.expected.push({
                                        frame: c.frame,
                                        notification: ra,
                                    });
                                }
                            );
                        }, k);
                    },
                };
            };
            a.prototype.expectSubscriptions = function (b) {
                var c = { actual: b, ready: !1 };
                this.flushTests.push(c);
                var e = this.runMode;
                return {
                    toBe: function (b) {
                        b = 'string' === typeof b ? [b] : b;
                        c.ready = !0;
                        c.expected = b
                            .map(function (b) {
                                return a.parseMarblesAsSubscriptions(b, e);
                            })
                            .filter(function (a) {
                                return Infinity !== a.subscribedFrame;
                            });
                    },
                };
            };
            a.prototype.flush = function () {
                for (var a = this, d = this.hotObservables; 0 < d.length; )
                    d.shift().setup();
                b.prototype.flush.call(this);
                this.flushTests = this.flushTests.filter(function (b) {
                    return b.ready
                        ? (a.assertDeepEqual(b.actual, b.expected), !1)
                        : !0;
                });
            };
            a.parseMarblesAsSubscriptions = function (a, b) {
                var c = this;
                void 0 === b && (b = !1);
                if ('string' !== typeof a) return new va(Infinity);
                var d = y([], x(a));
                a = d.length;
                for (
                    var g = -1,
                        k = Infinity,
                        h = Infinity,
                        l = 0,
                        m = function (a) {
                            var e = l,
                                f = function (a) {
                                    e += a * c.frameTimeFactor;
                                },
                                m = d[a];
                            switch (m) {
                                case ' ':
                                    b || f(1);
                                    break;
                                case '-':
                                    f(1);
                                    break;
                                case '(':
                                    g = l;
                                    f(1);
                                    break;
                                case ')':
                                    g = -1;
                                    f(1);
                                    break;
                                case '^':
                                    if (Infinity !== k)
                                        throw Error(
                                            "found a second subscription point '^' in a subscription marble diagram. There can only be one."
                                        );
                                    k = -1 < g ? g : l;
                                    f(1);
                                    break;
                                case '!':
                                    if (Infinity !== h)
                                        throw Error(
                                            "found a second unsubscription point '!' in a subscription marble diagram. There can only be one."
                                        );
                                    h = -1 < g ? g : l;
                                    break;
                                default:
                                    if (
                                        b &&
                                        m.match(/^[0-9]$/) &&
                                        (0 === a || ' ' === d[a - 1])
                                    ) {
                                        var n = d
                                            .slice(a)
                                            .join('')
                                            .match(
                                                /^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /
                                            );
                                        if (n) {
                                            a += n[0].length - 1;
                                            var m = parseFloat(n[1]),
                                                r = void 0;
                                            switch (n[2]) {
                                                case 'ms':
                                                    r = m;
                                                    break;
                                                case 's':
                                                    r = 1e3 * m;
                                                    break;
                                                case 'm':
                                                    r = 6e4 * m;
                                            }
                                            f(r / p.frameTimeFactor);
                                            break;
                                        }
                                    }
                                    throw Error(
                                        "there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" +
                                            m +
                                            "'."
                                    );
                            }
                            l = e;
                            t = a;
                        },
                        p = this,
                        t,
                        q = 0;
                    q < a;
                    q++
                )
                    m(q), (q = t);
                return 0 > h ? new va(k) : new va(k, h);
            };
            a.parseMarbles = function (a, b, e, f, g) {
                var c = this;
                void 0 === f && (f = !1);
                void 0 === g && (g = !1);
                if (-1 !== a.indexOf('!'))
                    throw Error(
                        'conventional marble diagrams cannot have the unsubscription marker "!"'
                    );
                var d = y([], x(a)),
                    l = d.length,
                    m = [];
                a = g ? a.replace(/^[ ]+/, '').indexOf('^') : a.indexOf('^');
                var p = -1 === a ? 0 : a * -this.frameTimeFactor,
                    t =
                        'object' !== typeof b
                            ? function (a) {
                                  return a;
                              }
                            : function (a) {
                                  return f && b[a] instanceof mb
                                      ? b[a].messages
                                      : b[a];
                              },
                    q = -1;
                a = function (a) {
                    var b = p,
                        f = function (a) {
                            b += a * c.frameTimeFactor;
                        },
                        k = void 0,
                        h = d[a];
                    switch (h) {
                        case ' ':
                            g || f(1);
                            break;
                        case '-':
                            f(1);
                            break;
                        case '(':
                            q = p;
                            f(1);
                            break;
                        case ')':
                            q = -1;
                            f(1);
                            break;
                        case '|':
                            k = ra;
                            f(1);
                            break;
                        case '^':
                            f(1);
                            break;
                        case '#':
                            k = G('E', void 0, e || 'error');
                            f(1);
                            break;
                        default:
                            if (
                                g &&
                                h.match(/^[0-9]$/) &&
                                (0 === a || ' ' === d[a - 1])
                            ) {
                                var l = d
                                    .slice(a)
                                    .join('')
                                    .match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                                if (l) {
                                    a += l[0].length - 1;
                                    var h = parseFloat(l[1]),
                                        n = void 0;
                                    switch (l[2]) {
                                        case 'ms':
                                            n = h;
                                            break;
                                        case 's':
                                            n = 1e3 * h;
                                            break;
                                        case 'm':
                                            n = 6e4 * h;
                                    }
                                    f(n / u.frameTimeFactor);
                                    break;
                                }
                            }
                            k = G('N', t(h), void 0);
                            f(1);
                    }
                    k && m.push({ frame: -1 < q ? q : p, notification: k });
                    p = b;
                    v = a;
                };
                for (var u = this, v, w = 0; w < l; w++) a(w), (w = v);
                return m;
            };
            a.prototype.createAnimator = function () {
                var b = this;
                if (!this.runMode)
                    throw Error('animate() must only be used in run mode');
                var d = 0,
                    e;
                return {
                    animate: function (c) {
                        var d, f;
                        if (e)
                            throw Error(
                                'animate() must not be called more than once within run()'
                            );
                        if (/[|#]/.test(c))
                            throw Error('animate() must not complete or error');
                        e = new Map();
                        c = a.parseMarbles(c, void 0, void 0, void 0, !0);
                        try {
                            for (
                                var h = E(c), l = h.next();
                                !l.done;
                                l = h.next()
                            )
                                b.schedule(function () {
                                    var a,
                                        c,
                                        d = b.now(),
                                        f = Array.from(e.values());
                                    e.clear();
                                    try {
                                        for (
                                            var g = ((a = void 0), E(f)),
                                                k = g.next();
                                            !k.done;
                                            k = g.next()
                                        ) {
                                            var h = k.value;
                                            h(d);
                                        }
                                    } catch (N) {
                                        a = { error: N };
                                    } finally {
                                        try {
                                            k &&
                                                !k.done &&
                                                (c = g.return) &&
                                                c.call(g);
                                        } finally {
                                            if (a) throw a.error;
                                        }
                                    }
                                }, l.value.frame);
                        } catch (r) {
                            d = { error: r };
                        } finally {
                            try {
                                l && !l.done && (f = h.return) && f.call(h);
                            } finally {
                                if (d) throw d.error;
                            }
                        }
                    },
                    delegate: {
                        requestAnimationFrame: function (a) {
                            if (!e)
                                throw Error(
                                    'animate() was not called within run()'
                                );
                            var b = ++d;
                            e.set(b, a);
                            return b;
                        },
                        cancelAnimationFrame: function (a) {
                            if (!e)
                                throw Error(
                                    'animate() was not called within run()'
                                );
                            e.delete(a);
                        },
                    },
                };
            };
            a.prototype.createDelegates = function () {
                var a = this,
                    b = 0,
                    e = new Map(),
                    f = function () {
                        var b = a.now(),
                            c = Array.from(e.values()).filter(function (a) {
                                return a.due <= b;
                            }),
                            d = c.filter(function (a) {
                                return 'immediate' === a.type;
                            });
                        if (0 < d.length)
                            (d = d[0]),
                                (c = d.handle),
                                (d = d.handler),
                                e.delete(c),
                                d();
                        else if (
                            ((d = c.filter(function (a) {
                                return 'interval' === a.type;
                            })),
                            0 < d.length)
                        ) {
                            var c = d[0],
                                l = c.duration,
                                d = c.handler;
                            c.due = b + l;
                            c.subscription = a.schedule(f, l);
                            d();
                        } else if (
                            ((c = c.filter(function (a) {
                                return 'timeout' === a.type;
                            })),
                            0 < c.length)
                        )
                            (d = c[0]),
                                (c = d.handle),
                                (d = d.handler),
                                e.delete(c),
                                d();
                        else
                            throw Error('Expected a due immediate or interval');
                    };
                return {
                    immediate: {
                        setImmediate: function (c) {
                            var d = ++b;
                            e.set(d, {
                                due: a.now(),
                                duration: 0,
                                handle: d,
                                handler: c,
                                subscription: a.schedule(f, 0),
                                type: 'immediate',
                            });
                            return d;
                        },
                        clearImmediate: function (a) {
                            var b = e.get(a);
                            b && (b.subscription.unsubscribe(), e.delete(a));
                        },
                    },
                    interval: {
                        setInterval: function (c, d) {
                            void 0 === d && (d = 0);
                            var g = ++b;
                            e.set(g, {
                                due: a.now() + d,
                                duration: d,
                                handle: g,
                                handler: c,
                                subscription: a.schedule(f, d),
                                type: 'interval',
                            });
                            return g;
                        },
                        clearInterval: function (a) {
                            var b = e.get(a);
                            b && (b.subscription.unsubscribe(), e.delete(a));
                        },
                    },
                    timeout: {
                        setTimeout: function (c, d) {
                            void 0 === d && (d = 0);
                            var g = ++b;
                            e.set(g, {
                                due: a.now() + d,
                                duration: d,
                                handle: g,
                                handler: c,
                                subscription: a.schedule(f, d),
                                type: 'timeout',
                            });
                            return g;
                        },
                        clearTimeout: function (a) {
                            var b = e.get(a);
                            b && (b.subscription.unsubscribe(), e.delete(a));
                        },
                    },
                };
            };
            a.prototype.run = function (b) {
                var c = a.frameTimeFactor,
                    e = this.maxFrames;
                a.frameTimeFactor = 1;
                this.maxFrames = Infinity;
                this.runMode = !0;
                var f = this.createAnimator(),
                    g = this.createDelegates();
                Q.delegate = f.delegate;
                fa.delegate = this;
                ia.delegate = g.immediate;
                ha.delegate = g.interval;
                aa.delegate = g.timeout;
                wa.delegate = this;
                f = {
                    cold: this.createColdObservable.bind(this),
                    hot: this.createHotObservable.bind(this),
                    flush: this.flush.bind(this),
                    time: this.createTime.bind(this),
                    expectObservable: this.expectObservable.bind(this),
                    expectSubscriptions: this.expectSubscriptions.bind(this),
                    animate: f.animate,
                };
                try {
                    var k = b(f);
                    this.flush();
                    return k;
                } finally {
                    (a.frameTimeFactor = c),
                        (this.maxFrames = e),
                        (this.runMode = !1),
                        (Q.delegate = void 0),
                        (fa.delegate = void 0),
                        (ia.delegate = void 0),
                        (ha.delegate = void 0),
                        (aa.delegate = void 0),
                        (wa.delegate = void 0);
                }
            };
            a.frameTimeFactor = 10;
            return a;
        })(Cc),
        Kd = Object.freeze({ TestScheduler: Jd }),
        db = (function () {
            return function (b, a, c, d) {
                void 0 === d && (d = 'download_load');
                this.originalEvent = b;
                this.xhr = a;
                this.request = c;
                this.type = d;
                c = a.status;
                d = a.responseType;
                this.status = null !== c && void 0 !== c ? c : 0;
                this.responseType = null !== d && void 0 !== d ? d : '';
                this.responseHeaders = (c = a.getAllResponseHeaders())
                    ? c.split('\n').reduce(function (a, b) {
                          var c = b.indexOf(': ');
                          a[b.slice(0, c)] = b.slice(c + 2);
                          return a;
                      }, {})
                    : {};
                this.response = sc(a);
                a = b.total;
                this.loaded = b.loaded;
                this.total = a;
            };
        })(),
        qa = P(function (b) {
            return function (a, b, d) {
                this.message = a;
                this.name = 'AjaxError';
                this.xhr = b;
                this.request = d;
                this.status = b.status;
                this.responseType = b.responseType;
                var c;
                try {
                    c = sc(b);
                } catch (f) {
                    c = b.responseText;
                }
                this.response = c;
            };
        }),
        tc = (function () {
            function b(a, b) {
                qa.call(this, 'ajax timeout', a, b);
                this.name = 'AjaxTimeoutError';
                return this;
            }
            b.prototype = Object.create(qa.prototype);
            return b;
        })(),
        qd = M(function (b) {
            return b.response;
        }),
        W = (function () {
            var b = function (a) {
                return rd('string' === typeof a ? { url: a } : a);
            };
            b.get = kd;
            b.post = ld;
            b.delete = md;
            b.put = nd;
            b.patch = od;
            b.getJSON = pd;
            return b;
        })(),
        td = 'upload',
        vc = 'download',
        eb = 'loadstart',
        fb = 'progress',
        uc = 'load',
        vd = Object.prototype.toString,
        Ld = Object.freeze({
            ajax: W,
            AjaxError: qa,
            AjaxTimeoutError: tc,
            AjaxResponse: db,
        }),
        Md = {
            url: '',
            deserializer: function (b) {
                return JSON.parse(b.data);
            },
            serializer: function (b) {
                return JSON.stringify(b);
            },
        },
        Ic = (function (b) {
            function a(a, d) {
                var c = b.call(this) || this;
                c._socket = null;
                if (a instanceof u) (c.destination = d), (c.source = a);
                else {
                    d = c._config = X({}, Md);
                    c._output = new C();
                    if ('string' === typeof a) d.url = a;
                    else for (var f in a) a.hasOwnProperty(f) && (d[f] = a[f]);
                    if (!d.WebSocketCtor && WebSocket)
                        d.WebSocketCtor = WebSocket;
                    else if (!d.WebSocketCtor)
                        throw Error('no WebSocket constructor can be found');
                    c.destination = new ga();
                }
                return c;
            }
            w(a, b);
            a.prototype.lift = function (b) {
                var c = new a(this._config, this.destination);
                c.operator = b;
                c.source = this;
                return c;
            };
            a.prototype._resetState = function () {
                this._socket = null;
                this.source || (this.destination = new ga());
                this._output = new C();
            };
            a.prototype.multiplex = function (a, b, e) {
                var c = this;
                return new u(function (d) {
                    try {
                        c.next(a());
                    } catch (h) {
                        d.error(h);
                    }
                    var f = c.subscribe(
                        function (a) {
                            try {
                                e(a) && d.next(a);
                            } catch (n) {
                                d.error(n);
                            }
                        },
                        function (a) {
                            return d.error(a);
                        },
                        function () {
                            return d.complete();
                        }
                    );
                    return function () {
                        try {
                            c.next(b());
                        } catch (h) {
                            d.error(h);
                        }
                        f.unsubscribe();
                    };
                });
            };
            a.prototype._connectSocket = function () {
                var a = this,
                    b = this._config,
                    e = b.WebSocketCtor,
                    f = b.protocol,
                    g = b.url,
                    b = b.binaryType,
                    k = this._output,
                    h = null;
                try {
                    (this._socket = h = f ? new e(g, f) : new e(g)),
                        b && (this._socket.binaryType = b);
                } catch (r) {
                    k.error(r);
                    return;
                }
                var l = new A(function () {
                    a._socket = null;
                    h && 1 === h.readyState && h.close();
                });
                h.onopen = function (b) {
                    if (a._socket) {
                        var c = a._config.openObserver;
                        c && c.next(b);
                        b = a.destination;
                        a.destination = sa.create(
                            function (b) {
                                if (1 === h.readyState)
                                    try {
                                        var c = a._config.serializer;
                                        h.send(c(b));
                                    } catch (Z) {
                                        a.destination.error(Z);
                                    }
                            },
                            function (b) {
                                var c = a._config.closingObserver;
                                c && c.next(void 0);
                                b && b.code
                                    ? h.close(b.code, b.reason)
                                    : k.error(
                                          new TypeError(
                                              'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }'
                                          )
                                      );
                                a._resetState();
                            },
                            function () {
                                var b = a._config.closingObserver;
                                b && b.next(void 0);
                                h.close();
                                a._resetState();
                            }
                        );
                        b &&
                            b instanceof ga &&
                            l.add(b.subscribe(a.destination));
                    } else h.close(), a._resetState();
                };
                h.onerror = function (b) {
                    a._resetState();
                    k.error(b);
                };
                h.onclose = function (b) {
                    a._resetState();
                    var c = a._config.closeObserver;
                    c && c.next(b);
                    b.wasClean ? k.complete() : k.error(b);
                };
                h.onmessage = function (b) {
                    try {
                        var c = a._config.deserializer;
                        k.next(c(b));
                    } catch (t) {
                        k.error(t);
                    }
                };
            };
            a.prototype._subscribe = function (a) {
                var b = this,
                    c = this.source;
                if (c) return c.subscribe(a);
                this._socket || this._connectSocket();
                this._output.subscribe(a);
                a.add(function () {
                    var a = b._socket;
                    0 === b._output.observers.length &&
                        (!a ||
                            (1 !== a.readyState && 0 !== a.readyState) ||
                            a.close(),
                        b._resetState());
                });
                return a;
            };
            a.prototype.unsubscribe = function () {
                var a = this._socket;
                !a || (1 !== a.readyState && 0 !== a.readyState) || a.close();
                this._resetState();
                b.prototype.unsubscribe.call(this);
            };
            return a;
        })(hb),
        Nd = Object.freeze({
            webSocket: function (b) {
                return new Ic(b);
            },
            WebSocketSubject: Ic,
        }),
        Od = Object.freeze({
            fromFetch: function (b, a) {
                void 0 === a && (a = {});
                var c = a.selector,
                    d = nb(a, ['selector']);
                return new u(function (a) {
                    var e = new AbortController(),
                        g = e.signal,
                        k = !0,
                        h = d.signal;
                    if (h)
                        if (h.aborted) e.abort();
                        else {
                            var m = function () {
                                g.aborted || e.abort();
                            };
                            h.addEventListener('abort', m);
                            a.add(function () {
                                return h.removeEventListener('abort', m);
                            });
                        }
                    var p = X(X({}, d), { signal: g }),
                        q = function (b) {
                            k = !1;
                            a.error(b);
                        };
                    fetch(b, p)
                        .then(function (b) {
                            c
                                ? v(c(b)).subscribe(
                                      new l(
                                          a,
                                          void 0,
                                          function () {
                                              k = !1;
                                              a.complete();
                                          },
                                          q
                                      )
                                  )
                                : ((k = !1), a.next(b), a.complete());
                        })
                        .catch(q);
                    return function () {
                        k && e.abort();
                    };
                });
            },
        });
    m.operators = Id;
    m.testing = Kd;
    m.ajax = Ld;
    m.webSocket = Nd;
    m.fetch = Od;
    m.Observable = u;
    m.ConnectableObservable = Ea;
    m.observable = ba;
    m.animationFrames = function (b) {
        return b ? ub(b) : xd;
    };
    m.Subject = C;
    m.BehaviorSubject = yc;
    m.ReplaySubject = ga;
    m.AsyncSubject = Ta;
    m.asap = zc;
    m.asapScheduler = zc;
    m.async = na;
    m.asyncScheduler = J;
    m.queue = Ac;
    m.queueScheduler = Ac;
    m.animationFrame = Bc;
    m.animationFrameScheduler = Bc;
    m.VirtualTimeScheduler = Cc;
    m.VirtualAction = kb;
    m.Scheduler = jb;
    m.Subscription = A;
    m.Subscriber = sa;
    m.Notification = Ha;
    m.pipe = Ma;
    m.noop = B;
    m.identity = D;
    m.isObservable = function (b) {
        return !!b && (b instanceof u || (q(b.lift) && q(b.subscribe)));
    };
    m.lastValueFrom = function (b, a) {
        var c = 'object' === typeof a;
        return new Promise(function (d, e) {
            var f = !1,
                g;
            b.subscribe({
                next: function (a) {
                    g = a;
                    f = !0;
                },
                error: e,
                complete: function () {
                    f ? d(g) : c ? d(a.defaultValue) : e(new V());
                },
            });
        });
    };
    m.firstValueFrom = function (b, a) {
        var c = 'object' === typeof a;
        return new Promise(function (d, e) {
            var f = new Fa({
                next: function (a) {
                    d(a);
                    f.unsubscribe();
                },
                error: e,
                complete: function () {
                    c ? d(a.defaultValue) : e(new V());
                },
            });
            b.subscribe(f);
        });
    };
    m.ArgumentOutOfRangeError = lb;
    m.EmptyError = V;
    m.NotFoundError = Dc;
    m.ObjectUnsubscribedError = xc;
    m.SequenceError = Ec;
    m.TimeoutError = Ib;
    m.UnsubscriptionError = Ga;
    m.bindCallback = function (b, a, c) {
        return Aa(!1, b, a, c);
    };
    m.bindNodeCallback = function (b, a, c) {
        return Aa(!0, b, a, c);
    };
    m.combineLatest = Nb;
    m.concat = ka;
    m.connectable = function (b, a) {
        void 0 === a && (a = Ed);
        var c = null,
            d = a.connector;
        a = a.resetOnDisconnect;
        var e = void 0 === a ? !0 : a,
            f = d();
        a = new u(function (a) {
            return f.subscribe(a);
        });
        a.connect = function () {
            if (!c || c.closed)
                (c = la(function () {
                    return b;
                }).subscribe(f)),
                    e &&
                        c.add(function () {
                            return (f = d());
                        });
            return c;
        };
        return a;
    };
    m.defer = la;
    m.empty = function (b) {
        return b ? Mc(b) : I;
    };
    m.forkJoin = function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var a = ja(b),
            b = Lb(b),
            c = b.args,
            d = b.keys,
            b = new u(function (a) {
                var b = c.length;
                if (b)
                    for (
                        var e = Array(b),
                            k = b,
                            h = b,
                            m = function (b) {
                                var f = !1;
                                v(c[b]).subscribe(
                                    new l(
                                        a,
                                        function (a) {
                                            f || ((f = !0), h--);
                                            e[b] = a;
                                        },
                                        function () {
                                            (--k && f) ||
                                                (h || a.next(d ? Mb(d, e) : e),
                                                a.complete());
                                        }
                                    )
                                );
                            },
                            p = 0;
                        p < b;
                        p++
                    )
                        m(p);
                else a.complete();
            });
        return a ? b.pipe(T(a)) : b;
    };
    m.from = ca;
    m.fromEvent = Wa;
    m.fromEventPattern = Rb;
    m.generate = function (b, a, c, d, e) {
        function f() {
            var b;
            return Ja(this, function (d) {
                switch (d.label) {
                    case 0:
                        (b = h), (d.label = 1);
                    case 1:
                        return a && !a(b) ? [3, 4] : [4, k(b)];
                    case 2:
                        d.sent(), (d.label = 3);
                    case 3:
                        return (b = c(b)), [3, 1];
                    case 4:
                        return [2];
                }
            });
        }
        var g, k, h;
        1 === arguments.length
            ? ((h = b.initialState),
              (a = b.condition),
              (c = b.iterate),
              (g = b.resultSelector),
              (k = void 0 === g ? D : g),
              (e = b.scheduler))
            : ((h = b), !d || xa(d) ? ((k = D), (e = d)) : (k = d));
        return la(
            e
                ? function () {
                      return xb(f(), e);
                  }
                : f
        );
    };
    m.iif = function (b, a, c) {
        return la(function () {
            return b() ? a : c;
        });
    };
    m.interval = Sb;
    m.merge = function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var a = L(b),
            c = 'number' === typeof b[b.length - 1] ? b.pop() : Infinity;
        return b.length ? (1 === b.length ? v(b[0]) : Ba(c)(da(b, a))) : I;
    };
    m.never = function () {
        return Fc;
    };
    m.of = Ra;
    m.onErrorResumeNext = function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return Tb(U(b))(I);
    };
    m.pairs = function (b, a) {
        return ca(Object.entries(b), a);
    };
    m.partition = function (b, a, c) {
        return [O(a, c)(v(b)), O(Ub(a, c))(v(b))];
    };
    m.race = function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        b = U(b);
        return 1 === b.length ? v(b[0]) : new u(Vb(b));
    };
    m.range = function (b, a, c) {
        null == a && ((a = b), (b = 0));
        if (0 >= a) return I;
        var d = a + b;
        return new u(
            c
                ? function (a) {
                      var e = b;
                      return c.schedule(function () {
                          e < d ? (a.next(e++), this.schedule()) : a.complete();
                      });
                  }
                : function (a) {
                      for (var c = b; c < d && !a.closed; ) a.next(c++);
                      a.complete();
                  }
        );
    };
    m.throwError = Gb;
    m.timer = ma;
    m.using = function (b, a) {
        return new u(function (c) {
            var d = b(),
                e = a(d);
            (e ? v(e) : I).subscribe(c);
            return function () {
                d && d.unsubscribe();
            };
        });
    };
    m.zip = Xa;
    m.scheduled = Db;
    m.EMPTY = I;
    m.NEVER = Fc;
    m.config = S;
    Object.defineProperty(m, '__esModule', { value: !0 });
});
//# sourceMappingURL=rxjs.umd.min.js.map
