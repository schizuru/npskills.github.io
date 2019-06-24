var characters = [
    {
        directory: 'cornelius',
        name: {
            en: 'Cornelius Crownsteed',
            jp: 'コーネリアス'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Aptitude',
                                    jp: '素質'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: '魔法威力+1.5%、最大チャージ+2% (最大 7.5% & 10%)'
                                },
                                calculation: [
                                    {
                                        index: 101,
                                        parcent: 1.5
                                    },
                                    {
                                        index: 201,
                                        parcent: 2
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Perseverance',
                                    jp: '忍耐力'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: 'リチャージ速度+5% (最大25%)'
                                },
                                calculation: [
                                    {
                                        index: 301,
                                        parcent: 5
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Boxing Lessons',
                                    jp: 'ボクシングの練習'
                                },
                                description: {
                                    en: '+10% melee damage (max 50%)',
                                    jp: '近接ダメージ+10% (最大+50%)'
                                },
                                calculation: [
                                    {
                                        index: 601,
                                        parcent: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Viridity',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: '生命魔法威力+3% (最大15%)'
                                },
                                calculation: [
                                    {
                                        index: 102,
                                        parcent: 3
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: '属性耐性'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '炎・氷・雷耐性+4% (最大20%)'
                                },
                                calculation: [
                                    {
                                        index: 401,
                                        parcent: 4
                                    },
                                    {
                                        index: 402,
                                        parcent: 4
                                    },
                                    {
                                        index: 403,
                                        parcent: 4
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Field Work',
                                    jp: 'フィールドワーク'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '魔法威力+2%、範囲魔法の最大チャージ+4% (最大10% & 20%)'
                                },
                                calculation: [
                                    {
                                        index: 101,
                                        parcent: 2
                                    },
                                    {
                                        index: 202,
                                        parcent: 4
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Elusion',
                                    jp: '回避'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects and +7% shorter stun duration (max 35% & 35%)',
                                    jp: 'スロウ・凍結耐性+7%、スタンの効果時間短縮+7% (最大35% & 35%)'
                                },
                                calculation: [
                                    {
                                        index: 406,
                                        parcent: 7
                                    },
                                    {
                                        index: 407,
                                        parcent: 7
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Crownsteed Pride',
                                    jp: 'クラウンスティード家の誇り'
                                },
                                description: {
                                    en: '+3% spell power (max 15%)',
                                    jp: '魔法威力+3% (最大15%)'
                                },
                                calculation: [
                                    {
                                        index: 101,
                                        parcent: 3
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Vigour',
                                    jp: '活力'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: 'クリティカル発生率+5%'
                                },
                                calculation: [
                                    {
                                        index: 901,
                                        parcent: 5
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Young Lord',
                                    jp: '若き領主'
                                },
                                description: {
                                    en: 'Each spell cast increases spell power by +8% for 10 seconds.',
                                    jp: '各魔法の威力が10秒間、8%アップ'
                                },
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Spellcraft',
                                    jp: '魔法精製'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '魔法威力+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Perserverance II',
                                    jp: '忍耐力Ⅱ'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: 'リチャージ速度+5% (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Channeler',
                                    jp: 'チャネラー'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: 'チャネリング魔法のダメージ+1%、チャネリング1秒ごとに最大+5% (最大5% & 25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Spellslinger',
                                    jp: 'スペルスリンガー'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '魔弾威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Lead the Field',
                                    jp: 'フィールドの支配者'
                                },
                                description: {
                                    en: '+3% area spell power (max 15%)',
                                    jp: '範囲魔法威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: '躍動'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: '対象撃破後、10秒間HPが10回復 (最大50秒間 & 10) ※ (最大10秒間 & 50) の誤りです。10秒間かけてHPが最大50回復します。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Homework',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: 'クリティカル発生率+5% (最大10%) ※ +2%の誤りです。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Hubris',
                                    jp: '思い上がり'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: '対象撃破後10秒間、魔法威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Brainstorm',
                                    jp: 'ブレインストーミング'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: '対象撃破後2秒間、リチャージ速度+25% (最大125%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Dangerous Spells',
                                    jp: '危険な魔法'
                                },
                                description: {
                                    en: '+25% critical hit damage',
                                    jp: 'クリティカルダメージ+25%'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Champion',
                                    jp: 'チャンピオン'
                                },
                                description: {
                                    en: '+10% critical hit chance, +20% spell power',
                                    jp: 'クリティカル発生率+10％、魔法威力+20%'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '最大HP+5% (最大+25%) ※ ライジングスピリッツの後に適用されます。たとえば、最大HPの初期値300にライジングスピリッツ5 (+60*2.5) と活気5 (+25%) が適用されると563になります。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Panic Casting',
                                    jp: 'パニックマジック'
                                },
                                description: {
                                    en: '+3% damage resistance for 2 seconds when casting spells (max 15%)',
                                    jp: '魔法発動時に2秒間、ダメージ耐性+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Transference',
                                    jp: '転換'
                                },
                                description: {
                                    en: '+2% spell damage dealt is returned to you as health (max 10%)',
                                    jp: '与えた魔法ダメージの2%が自分のHPとして戻ってくる (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: 'サンドバッグ'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: '他の味方からの被ダメージを10%軽減 (最大50%) ※ 他の耐性・軽減とは別に適用されます。たとえば、耐性50%にサンドバッグ5を加えても耐性100%にはならず、被ダメージが25%になります。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Echoing Enchantment',
                                    jp: '反響する魔力'
                                },
                                description: {
                                    en: '+20% chance to reflect 75% of damage dealt back to attacker when taking melee damage (max 100% chance)',
                                    jp: '近接ダメージを受けた際、20% (最大100%)の確率で、ダメージの75%を相手に跳ね返す ※ 被ダメージは減りません。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Physical Education',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Duteous',
                                    jp: '忠実'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: 'スロウ・凍結・スタン耐性+5%、魔法ダメージ耐性+2% (最大25% & 10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Dignity',
                                    jp: '威厳'
                                },
                                description: {
                                    en: '+4% damage resistance while standing still (max 20%)',
                                    jp: '立ち止まっている時のダメージ耐性+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Dodge!',
                                    jp: 'よけろ！'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '移動中のダメージ耐性+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Rising Spirits',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+0.5 health per character level (max 2.5)',
                                    jp: '自分のレベルごとにHP+0.5 (最大2.5)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Blue Blood',
                                    jp: '青い血'
                                },
                                description: {
                                    en: 'Nullifies fatal damage dealt to you and restores you to 20% of total health. Can only occur once in a fight.',
                                    jp: '戦闘不能になるダメージを受けた場合にそれを無効化し、最大HPの20%の状態で蘇生される。一度の戦闘で一度限り有効'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        directory: 'gislan',
        name: {
            en: 'Gislan of Alcyon',
            jp: 'ギスラン'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Spellcraft',
                                    jp: '魔術精製'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '魔法威力+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Mana Flow',
                                    jp: 'マナフロー'
                                },
                                description: {
                                    en: '+7% faster spell regeneration (max 35%)',
                                    jp: 'リチャージ速度+7% (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Viridity',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+4% Life spell power (max 20%)',
                                    jp: '生命魔法威力+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Gift of Nature',
                                    jp: '自然の恵み'
                                },
                                description: {
                                    en: '+2% spell power and melee damage for 10 seconds to targets affected by your healing (max 10%)',
                                    jp: 'ヒールした対象の魔法威力と近接ダメージを10秒間+2%する (最大10%) ※ 生命の泉のヒール効果でも発動します。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Protector of Life',
                                    jp: '生命の守護者'
                                },
                                description: {
                                    en: '+2% damage resistance for 10 seconds to targets affected by your healing (max 10%)',
                                    jp: 'ヒール効果を与えた対象に10秒間、ダメージ耐性+2% (最大10%) ※ 生命の泉のヒール効果でも発動します。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Field Work',
                                    jp: 'フィールドワーク'
                                },
                                description: {
                                    en: '+2% spell power and +4% area spell charges (max 10% & 20%)',
                                    jp: '魔法威力+2%、範囲魔法の最大チャージ+4% (最大10% & 20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Cunning',
                                    jp: '悪だくみ'
                                },
                                description: {
                                    en: '+5% Life spell charges, and +5% stun and freeze duration for your spells (max 25% & 25%)',
                                    jp: '生命魔法の最大チャージ+5%、スタン・凍結の効果時間+5% (最大25% & 25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Deep Roots',
                                    jp: '深い根'
                                },
                                description: {
                                    en: '+15% Life spell charges',
                                    jp: '生命魔法の最大チャージ+15% ※要：生命力、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Flourish',
                                    jp: '繁栄'
                                },
                                description: {
                                    en: '7% shorter stun duration and 7% resistance to slowing and freezing effects for 5 seconds to targets affected by your healing (max 35%)',
                                    jp: 'スタンの効果時間短縮+7%、ヒールした対象のスロウ・凍結耐性を5秒間+7% (最大35%) ※ 生命の泉のヒール効果でも発動します。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Regrowth',
                                    jp: '再生'
                                },
                                description: {
                                    en: 'When healing someone, you receive 4 health over 2 seconds (max 20 & 2s)',
                                    jp: '誰かをヒールすると自分のHPを2秒間に4回復する (最大20 & 2秒) ※ 生命の泉のヒール効果でも発動します。+5%'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Everbloom',
                                    jp: '四季咲き'
                                },
                                description: {
                                    en: '+45% faster Life spell regeneration when in full health. Missing health reduces the bonus. When you die, a random student is resurrected, once per level. If no one is dead, you resurrect yourself.',
                                    jp: 'HP100%の時に生命魔法のリチャージ速度+45%。HPが減ると効果量も減少。自分が戦闘不能になると、1ステージに一度だけランダムな学生1人が蘇生される。戦闘不能の仲間がいない場合は自分を蘇生する'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Lively Company',
                                    jp: 'にぎやかな仲間'
                                },
                                description: {
                                    en: '+2% spell power for you and fellow students (max 10%)',
                                    jp: '自分と仲間の学生の魔法威力+2％ (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Channeler',
                                    jp: 'チャネラー'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% damage (max 5% & 25%)',
                                    jp: 'チャネリング魔法のダメージがチャネリング1秒ごとに+1%上昇、最大で+5%まで上昇する (最大5% & 25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Spellslinger',
                                    jp: 'スペルスリンガー'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '魔弾威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Upheaval',
                                    jp: '大騒ぎ'
                                },
                                description: {
                                    en: '+3% throwable spell power (max 15%)',
                                    jp: '投てき魔法威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Hindrances',
                                    jp: '妨害'
                                },
                                description: {
                                    en: 'Your spells\'s slowing and freezing effects last +5% longer and stun effects last +7% longer (max 25% & 35%)',
                                    jp: '魔法によるスロウ・凍結効果時間+5%、スタン効果時間+7% (最大25% & 35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Physical Education',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% movement speed (max 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                                        {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Thrill of the Chase',
                                    jp: '追跡のスリル'
                                },
                                description: {
                                    en: '+4% movement speed for 2 seconds when dealing damage (max 20%)',
                                    jp: 'ダメージを与えた時2秒間、移動速度+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Homework',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: 'クリティカル発生率+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Clairvoyance',
                                    jp: '予知能力'
                                },
                                description: {
                                    en: '+12% faster spell regeneration',
                                    jp: 'リチャージ速度+12% ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Bewitching',
                                    jp: 'チャンピオン'
                                },
                                description: {
                                    en: '+0.5% increased spell power each percent of missing health up to 50%. When you die, a random student is resurrected, once per level. If no one is dead, you resurrect yourself.',
                                    jp: 'HPが最大50%まで1%減るごとに魔法威力+0.5%。自分が戦闘不能になると、1ステージに1度だけランダムな学生1人が蘇生される。戦闘不能の仲間がいない場合は自分を蘇生する'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Rites of Spring',
                                    jp: '春の儀式'
                                },
                                description: {
                                    en: '+7% faster resurrection speed (max 35%)',
                                    jp: '蘇生速度+7% (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Thick-Skinned',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+2% damage resistance (max 10%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Transference',
                                    jp: '転換'
                                },
                                description: {
                                    en: '2% of spell damage dealt is returned to you as healing (max 10%)',
                                    jp: '与えた魔法ダメージの2%がヒールとして自分に戻ってくる (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Death Resistance',
                                    jp: '死属性耐性'
                                },
                                description: {
                                    en: '+8% Death resistance (max 40%)',
                                    jp: '死属性耐性+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Rising Spirits',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+1 health per character level',
                                    jp: '自分のレベルごとにHP+1 ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max 25%)',
                                    jp: '最大HP+5% (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Panic Casting',
                                    jp: 'パニックマジック'
                                },
                                description: {
                                    en: '+4% damage resistance for 4 seconds while casting spells (max 20%)',
                                    jp: '魔法を発動している間の4秒間、ダメージ耐性+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Beckon Life',
                                    jp: '手招く生命'
                                },
                                description: {
                                    en: '1% of your spell damage dealt is returned as healing to you and your fellow students (max 5%)',
                                    jp: '与えた魔法ダメージの1%がヒールとして自分と仲間の学生に戻ってくる (最大5%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: '属性耐性'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '炎・氷・雷耐性+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Fountain of Life',
                                    jp: '生命の泉'
                                },
                                description: {
                                    en: 'You and your fellow students are healed constantly, with 2% of total health restored every 2s. If you take Death damage, healing is halted for 20s. Triggers Flourish, Protector of Life and Gift of Nature.',
                                    jp: '自分と仲間のHPが2秒ごとに最大HPの2%分ヒールされる。死属性ダメージを受けるとヒールは止まり、繁栄、生命の守護者、自然の恵みを発動する。※ 「自分と仲間のHPを2秒ごとに最大HPの2%分ヒールし、繁栄、生命の守護者、自然の恵み、再生を発動する。死属性ダメージを受けるとヒールは20秒間止まる。」というのが正しい説明です。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        directory: 'marvek',
        name: {
            en: 'Marvek the Torrid',
            jp: 'マーヴェック'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Spellcraft',
                                    jp: '魔術精製'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '魔法威力+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Lead the Field',
                                    jp: 'フィールドの支配者'
                                },
                                description: {
                                    en: '+3% area spell power (max 15%)',
                                    jp: '範囲魔法威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Homework',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: 'クリティカル発生率+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Thick-Skinned',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+2% damage resistance (max 10%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Ignite',
                                    jp: '着火'
                                },
                                description: {
                                    en: 'Fire spells set the target on fire, dealing +20 Fire damage over 10 seconds. Stacks up to 5 times. (max 100 dmg over 10s)',
                                    jp: '炎魔法で対象が炎上するようになる。炎上は10秒間で10の炎属性ダメージを与える (最大50ダメージ & 10秒)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Flame Wards',
                                    jp: '炎の加護'
                                },
                                description: {
                                    en: '+4% Fire resistance for you and your fellow students (max 20%)',
                                    jp: '自分と仲間の学生の炎耐性+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Backbone',
                                    jp: '気骨'
                                },
                                description: {
                                    en: '+10% Fire spell charges',
                                    jp: '炎魔法の最大チャージ+10% ※要：厚い皮膚、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Chastise',
                                    jp: '懲罰'
                                },
                                description: {
                                    en: '+7% critical hit damage (max 35%)',
                                    jp: 'クリティカルダメージ+7% (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Experienced',
                                    jp: '経験者'
                                },
                                description: {
                                    en: 'Dealing fire damage has 20% chance to give +8% faster spell regeneration for 5 seconds (max 40% regeneration)',
                                    jp: '炎属性ダメージを与えると、20%の確率で5秒間、リチャージ速度が+8%される (リチャージ速度最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Simmer',
                                    jp: '沸騰寸前'
                                },
                                description: {
                                    en: '+0.3 Fire spell power per your character level',
                                    jp: '自分のレベルごとに炎魔法威力+0.3% ※要：気骨、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Special Recipe',
                                    jp: '特別なレシピ'
                                },
                                description: {
                                    en: 'Casting elemental spells other than Fire spells grants +10% spell power bonus for next 15 seconds, this can stack up to 3 times for each different element type cast.',
                                    jp: '炎魔法以外の属性魔法を発動すると、それから15秒間、魔法威力が+10%される。この効果は、違う属性の魔法をかけるたびに最大3まで累積する。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Firepower',
                                    jp: '火力'
                                },
                                description: {
                                    en: '+3% Fire spell power (max 15%)',
                                    jp: '炎魔法威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Seeing Red',
                                    jp: '激怒'
                                },
                                description: {
                                    en: '+5% Fire resistance and +2% Fire damage for 5 seconds when casting Fire spells (max 25% & 10%)',
                                    jp: '炎耐性+5%。炎魔法を発動してから5秒間、炎属性ダメージ+2% (最大25% & 10%) ※ 炎耐性も炎魔法を発動してから5秒間のみ有効です。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Inflame',
                                    jp: '炎に包まれて'
                                },
                                description: {
                                    en: 'Fire spells have 7% chance to set target on fire, dealing 40 Fire damage over 2 seconds (max 35%)',
                                    jp: '7%の確率で、炎魔法で対象が炎上するようになる。炎上は2秒間で40の炎属性ダメージを与える (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Crunchy Crust',
                                    jp: 'サクサクの生地'
                                },
                                description: {
                                    en: 'When target takes Fire damage, the effectiveness of all healing on target is reduced by 15% for next 3 seconds (max 75%)',
                                    jp: '対象が炎属性ダメージを受けた際、その対象へのヒール効果を3秒間、15%軽減する (最大75%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Hot Spot',
                                    jp: 'ホットスポット'
                                },
                                description: {
                                    en: '-5% to target\'s Fire resistance (max -25%)',
                                    jp: '対象の炎耐性-5% (最大-25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Amplified Flames',
                                    jp: '延焼'
                                },
                                description: {
                                    en: '+3% critical hit chance with Fire spells (max 15%)',
                                    jp: '炎魔法でのクリティカル発生率+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Searing Handshake',
                                    jp: '燃え盛る手'
                                },
                                description: {
                                    en: '50% chance to deal 20 Fire damage with melee attacks',
                                    jp: '近接攻撃時に50%の確率で20の炎属性ダメージを与える ※要：激怒、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Baby Boom',
                                    jp: 'ベビーブーム'
                                },
                                description: {
                                    en: 'Small Fireball, Huge Fireball, Cursed Meteor Shower and Fire Bullet spells have 7% chance to generate 3 smaller explosions, dealing 30 Fire area damage (max 35%)',
                                    jp: 'スモール・ファイヤーボール、ヒュージ・ファイヤーボール、カースド・メテオシャワー、ファイヤー・ブレットが7%の確率で3の小規模な爆発を起こすようになり、30の炎魔法の範囲ダメージを与える (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Blowtorch',
                                    jp: 'ブロートーチ'
                                },
                                description: {
                                    en: '+7% critical hit damage with Fire spells (max 35%)',
                                    jp: '炎魔法でのクリティカルダメージ+7% (最大35%) ※要：延焼'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Tough Cookie',
                                    jp: 'タフ・クッキー'
                                },
                                description: {
                                    en: 'Upon Death, deals 100 Fire damage to target who dealt the killing blow. If target is killed, you are revived to 15% health. Revive can only occur once per fight. (max 200 & 75%)',
                                    jp: '戦闘不能時、自分を倒した相手に100の炎属性ダメージを与える。この効果で相手を倒すと、HP15%の状態で自分を蘇生する。蘇生は一度の戦闘で一度限り有効 (最大200 & 75%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Trailblazer',
                                    jp: '先導者'
                                },
                                description: {
                                    en: '+20% Fire spell damage and +20% Fire resistance to you and your fellow students.',
                                    jp: '自分と仲間の学生の炎魔法威力+20%、炎耐性+20% ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max 25%)',
                                    jp: '最大HP+5% (最大+25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Fire Resistance',
                                    jp: '炎耐性'
                                },
                                description: {
                                    en: '+8% Fire resistance (max 40%)',
                                    jp: '炎耐性+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Physical Education',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% movement speed (max 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Mana Flow',
                                    jp: 'マナフロー'
                                },
                                description: {
                                    en: '+7% faster spell regeneration (max 35%)',
                                    jp: 'リチャージ速度7% (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Ice Resistance',
                                    jp: '氷耐性'
                                },
                                description: {
                                    en: '+8% Ice resistance (max 40%)',
                                    jp: '氷耐性+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Lightning Resistance',
                                    jp: '雷耐性'
                                },
                                description: {
                                    en: '+8% Lightning resistance (max 40%)',
                                    jp: '雷耐性+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Firebrand',
                                    jp: 'ファイヤーブランド'
                                },
                                description: {
                                    en: 'Dealing a melee attack heals you by 100 points over 10 seconds, additional melee damage attacks during this time refresh the healing.',
                                    jp: '近接攻撃すると10秒間で100のHPを回復する。近接攻撃の度に効果時間は更新される ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Mana Barrier',
                                    jp: 'マナバリア'
                                },
                                description: {
                                    en: '+3% of your spell damage dealt creates a damage absorbing barrier aroud you with max 100 barrier points. Lasts 5 seconds if damage is not dealt (max 15%)',
                                    jp: '与えた魔法ダメージの3%のバリアポイントを持つ、ダメージを吸収するバリアが自分の周りに張られる。バリアポイントは最大100まで貯まる。5秒間魔法ダメージを与えないと消滅する (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Rising Spirits',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+0.5 health per character level (max 2.5)',
                                    jp: '自分のレベルごとにHP+0.5 (最大2.5)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Heat Stroke',
                                    jp: '熱中症'
                                },
                                description: {
                                    en: 'Fire spells stun your target for 1 seconds and deal 40 Fire damage.',
                                    jp: '炎魔法で対象が1秒間スタンするようになり、40の炎属性ダメージを与える ※最大1/1 ※ 炎耐性100%以上でもスタンします。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        directory: 'carabel',
        name: {
            en: 'Carabel the Glacial',
            jp: 'カラベル'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Spellcraft',
                                    jp: '魔術精製'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '魔法威力+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Numbing Thumb',
                                    jp: '震える指'
                                },
                                description: {
                                    en: '5% chance to deal 50 ice damage when dealing a melee attack (max 25% & 50)',
                                    jp: '近接攻撃時に5%の確率で50の氷属性ダメージを与える (最大25% & 50)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Coldproof',
                                    jp: '寒冷地仕様'
                                },
                                description: {
                                    en: '+20% resistance against slowing and freezing effects (max 100%)',
                                    jp: 'スロウ・凍結耐性+20% (最大100%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Thick-Skinned',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+2% damage resistance (10%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Battlemage',
                                    jp: 'バトルメイジ'
                                },
                                description: {
                                    en: '+2% spell power and +3% maximum health (max 10% & 15%)',
                                    jp: '魔法威力+2%、最大HP+3% (最大10% & 15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Viridity',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+4% Life spell power (max 20%)',
                                    jp: '生命魔法威力+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Ice Wards',
                                    jp: '氷の加護'
                                },
                                description: {
                                    en: '+4% Ice resistance for you and your fellow students (max 20%)',
                                    jp: '自分と仲間の学生の氷耐性+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Jinx',
                                    jp: 'ジンクス'
                                },
                                description: {
                                    en: 'Target becomes 5% more vulnerable to spell damage for 10 seconds after you deal them a melee hit (max 25%)',
                                    jp: '近接攻撃を与えた後、対象の魔法ダメージ耐性を10秒間、5%低下させる。(最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Rising Spirits',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+2 health per character level',
                                    jp: '自分のレベルごとにHP+2 ※要：厚い皮膚、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Flash Freezing',
                                    jp: '急速冷凍'
                                },
                                description: {
                                    en: '+50+% maximum charges for Ice spells',
                                    jp: '氷魔法の最大チャージ+50% ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Snow Maiden',
                                    jp: '雪の乙女'
                                },
                                description: {
                                    en: '+3% Ice spell power (max 15%)',
                                    jp: '氷魔法威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Ice Attunement',
                                    jp: '氷との調和'
                                },
                                description: {
                                    en: '+7% faster Ice spell regeneration (max 35%)',
                                    jp: '氷魔法のリチャージ速度+7% (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Frost-Bound',
                                    jp: '氷攻め'
                                },
                                description: {
                                    en: 'Your spells\' slowing and freezing effects last +10% longer (max 50%)',
                                    jp: '魔法で与えるスロウ・凍結の効果時間を10%延長する (最大50%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Cold Shoulder',
                                    jp: '冷遇'
                                },
                                description: {
                                    en: 'When taking melee damage, +15% chance to deal 50 Ice damage to attacker (max 75%)',
                                    jp: '近接ダメージを受けた際、15%の確率でその相手に50の氷属性ダメージを与える (最大75%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Deep Freeze',
                                    jp: 'ディープフリーズ'
                                },
                                description: {
                                    en: '10% chance for your spells\' freezing effects to last 0.5 second longer (max 50% & 2.5s)',
                                    jp: '対象に与える凍結の効果時間が、10%の確率で0.5秒間延長される (最大50% & 2.5秒)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Dead of Winter',
                                    jp: '冬の嵐'
                                },
                                description: {
                                    en: '+3% critical hit chance with Ice spells (max 15%)',
                                    jp: '氷魔法のクリティカル発生率+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Bitter Cold',
                                    jp: '極寒'
                                },
                                description: {
                                    en: '+3% Ice spell power, and +5% Ice spell charges (max 15% & 25%)',
                                    jp: '氷魔法威力+3%、氷魔法の最大チャージ+5% (最大15% & 25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Relentless Winter',
                                    jp: '厳しい冬'
                                },
                                description: {
                                    en: '-5% to target Ice resistance (max -25%)',
                                    jp: '対象の氷耐性-5% (最大-25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'On Thin Ice',
                                    jp: '薄い氷の上'
                                },
                                description: {
                                    en: 'Slowed and frozen targets take +15% more damage from your spells.',
                                    jp: 'スロウ・凍結状態の対象への魔法ダメージ+15% ※要：冷遇、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Glacial Grounds',
                                    jp: '氷の大地'
                                },
                                description: {
                                    en: 'Killing a frozen target causes it to explode and create an icy field, dealing 30 Ice damage per second to everyone within the area for 5 seconds.',
                                    jp: '凍結状態の対象を倒すと、対象が爆発して氷のフィールドを作る。フィールドの上にいる全員が1秒ごとに30の氷属性ダメージを5秒間受ける ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '最大HP+5% (最大+25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Ice Resistance',
                                    jp: '氷耐性'
                                },
                                description: {
                                    en: '+8% Ice resistance (max 40%)',
                                    jp: '氷耐性+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Fire Resistance',
                                    jp: '炎耐性'
                                },
                                description: {
                                    en: '+8% Fire resistance (max 40%)',
                                    jp: '炎耐性+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Death Resistance',
                                    jp: '死属性耐性'
                                },
                                description: {
                                    en: '+8% Death resistance (max 40%)',
                                    jp: '死属性耐性+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Lightning Resistance',
                                    jp: '雷耐性'
                                },
                                description: {
                                    en: '+8% Lightning resistance (max 40%)',
                                    jp: '雷耐性+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Cold Front',
                                    jp: '寒冷前線'
                                },
                                description: {
                                    en: '3% of Ice damage dealt is returned as healing (max 15%)',
                                    jp: '与えた氷属性ダメージの3%がヒールとして自分に戻ってくる (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Physical Education',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% movement speed (max 10%)',
                                    jp: '移動速度+2％ (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Snowball',
                                    jp: '雪玉'
                                },
                                description: {
                                    en: 'After casting an Ice spell, other spells are regenerated +7% faster for 5 seconds (max 35%)',
                                    jp: '氷魔法発動後、他の魔法のリチャージ速度を5秒間+7%する (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Tooth and Claw',
                                    jp: '全力'
                                },
                                description: {
                                    en: '3% damage resistance for 2 seconds after dealing a melee hit (max 15%)',
                                    jp: '近接攻撃を与えた後に2秒間、ダメージ耐性+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Breather',
                                    jp: 'ひと休み'
                                },
                                description: {
                                    en: '+20% faster spell regeneration. The effect is temporarily cancelled for 5 seconds when taking damage.',
                                    jp: 'リチャージ速度+20%。ダメージを受けると、この効果は5秒間発動しない ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Ice Barrier',
                                    jp: 'アイスバリア'
                                },
                                description: {
                                    en: '10% of your Ice spell damage done creates an Ice Shield around you with max 100 barrier points. Lasts 20 seconds if damage is not dealt.',
                                    jp: '与えた氷魔法ダメージの10%のバリアポイントを持つアイスシールドが自分の周りに張られる。バリアポイントは最大で100まで貯まる。20秒間魔法ダメージを与えないと消滅する。※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        directory: 'rudolfus',
        name: {
            en: 'Rudolfus the Strange',
            jp: 'ルドルファス'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Thick-Skinned',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+2% damage resistance (max 10%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Aptitude',
                                    jp: '素質'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: '魔法威力1.5%、魔法の最大チャージ+2% (最大7.5% & 10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '最大HP+5% (最大+25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Mana Flow',
                                    jp: 'マナフロー'
                                },
                                description: {
                                    en: '+7% faster spell regeneration speed (max 35%)',
                                    jp: 'リチャージ速度+7% (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Chaotic Harmony',
                                    jp: '混沌と調和'
                                },
                                description: {
                                    en: '+7% Life and Death spell charges (max 35%)',
                                    jp: '生命・死属性魔法の最大チャージ+7% (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Jinx',
                                    jp: 'ジンクス'
                                },
                                description: {
                                    en: 'Target becomes +5% more vulnerable to spell damage for 10 seconds after you deal them a melee hit (max 25%)',
                                    jp: '近接攻撃を与えた後、対象の魔法ダメージ耐性を10秒間、5%低下させる (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Cursed Fields',
                                    jp: '呪いの領域'
                                },
                                description: {
                                    en: '+7% area spell power',
                                    jp: '範囲魔法威力+7% ※要：素質、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Death Wards',
                                    jp: '死の加護'
                                },
                                description: {
                                    en: '+4% Death resistance for you and your fellow students (max 20%)',
                                    jp: '自分と仲間の学生の死属性耐性+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Dying Breath',
                                    jp: '死の息吹'
                                },
                                description: {
                                    en: 'Each fellow student in spirit state gives you +3% damage resistance, and increases their resurrection speed by +5% (max 15% & 25%)',
                                    jp: '魂の状態の仲間1人につき自分のクリティカル率を+3%し、仲間の蘇生速度を+5%する (最大15％ & 25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Fields of Death',
                                    jp: '死の領域'
                                },
                                description: {
                                    en: '+5% area spell power',
                                    jp: '範囲魔法威力+7% ※要：呪いの領域、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Death Orbs',
                                    jp: '死のオーブ'
                                },
                                description: {
                                    en: 'Killing a target creates a Death Orb, dealing 20 Death damage per second to anyone touching it. Death Orbs last 30 seconds. Each existing Death Orb increases your spell damage by +7%.',
                                    jp: '対象を倒すと死のオーブが生成され、触れている者すべてに1秒ごとに20の死属性ダメージを与える。死のオーブは30秒間有効。死のオーブ1つにつき、自分の魔法ダメージを+5%する ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Wickedness',
                                    jp: '邪悪'
                                },
                                description: {
                                    en: '+3% Death spell power (max 15%)',
                                    jp: '死属性魔法威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Death Resistance',
                                    jp: '死属性耐性'
                                },
                                description: {
                                    en: '+8% Death resistance (max 40%)',
                                    jp: '死属性耐性+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Circle of Life',
                                    jp: '命の輪'
                                },
                                description: {
                                    en: 'Each target killed heals you by 8 points (max 40)',
                                    jp: '対象が倒されるごとに自分のHPを8回復する (最大40)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Dark Shadows',
                                    jp: '暗い影'
                                },
                                description: {
                                    en: '+6% Death spell charges (max 30%)',
                                    jp: '死属性魔法の最大チャージ+6% (最大30%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Wither',
                                    jp: '衰退'
                                },
                                description: {
                                    en: 'When your target is damaged by Death spells, the effectiveness of all healing on target is reduced by 20% for next 1 sec (max 100% & 5s)',
                                    jp: '対象が死属性魔法でダメージを受けた際、その対象へのヒール効果を1秒間、20%軽減する (最大5秒間 & 100%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Inevitable Doom',
                                    jp: '破滅の運命'
                                },
                                description: {
                                    en: '-5% target Death resistance (max -25%)',
                                    jp: '対象の死属性耐性-5% (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Sinister Aura',
                                    jp: '邪悪なオーラ'
                                },
                                description: {
                                    en: 'You emit an aura, dealing 10 Death damage per second to anyone who touches you, and gain 3% damage resistance (max 50 & 15%)',
                                    jp: '自分からオーラを放出し、触れている者すべてに1秒ごとに10の死属性ダメージを与える。ダメージ耐性+3% (最大50 & 15%) ※要：暗い影'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Sudden Death',
                                    jp: '突然死'
                                },
                                description: {
                                    en: '+3% Death spell critical hit chance (max 15%)',
                                    jp: '死属性魔法のクリティカル発生率+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Leech',
                                    jp: 'ヒル'
                                },
                                description: {
                                    en: 'Out of all Death damage dealt by you, other students or enemies 3% is returned to you as healing (max 15%)',
                                    jp: '自分や他の仲間、または敵が与えた死属性ダメージの3%がヒールとして自分に戻ってくる (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Spectral Lines',
                                    jp: 'スペクトルライン'
                                },
                                description: {
                                    en: 'Killing someone with a Death spell creates a Spectral Line between you and the place of death. Enemies in contact with the Spectral Line take 30 damage every 0.25 seconds, all friendly targets are healed by 10 every 0.25 seconds. Spectral Lines last for 10 seconds. Only one Spectral Line per caster can be active at the same time.',
                                    jp: '死属性魔法で相手を倒すと、その場所と自分を結ぶスペクトルラインを生成する。スペクトルラインに触れた敵は0.25秒ごとに30のダメージを受ける。味方の場合は0.25秒ごとに10のHPを回復する。スペクトルラインは10秒間有効。スペクトルラインを同時に放つことができるのは1人1本まで'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Hindrances',
                                    jp: '妨害'
                                },
                                description: {
                                    en: 'Your spells\' slowing and freezing effects last +5% longer and stun effects last +7% longer (max 25% & 35%)',
                                    jp: '魔法によるスロウ・凍結時間+5%、スタン効果時間+7%延長 (最大25% & 35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Field Work',
                                    jp: 'フィールドワーク'
                                },
                                description: {
                                    en: '+2% spell power and +4% area spell charges (max 10% & 20%)',
                                    jp: '魔法威力+2%、範囲魔法の最大チャージ+4% (最大10% & 20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Face to Face',
                                    jp: '1vs1'
                                },
                                description: {
                                    en: 'If there are enemies nearby, you gain +4% damage resistance (max 15%)',
                                    jp: '敵が近くにいる時、ダメージ耐性+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Homework',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: 'クリティカル発生率+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Creeping Corruption',
                                    jp: '堕落'
                                },
                                description: {
                                    en: 'Death spells have +7% chance to poison targets, dealing 10 damage over 10 seconds (max 35% chance to deal 50 dmg over 10 seconds)',
                                    jp: '死属性魔法が7%の確率で対象に毒を付与するようになる。毒は10秒間で10のダメージを与える (最大35% & 10秒 & 50ダメージ)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Toe to Toe',
                                    jp: '真っ向勝負'
                                },
                                description: {
                                    en: '+20% melee attack damage (max 100%)',
                                    jp: '近接攻撃ダメージ+20% (最大100%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Dangerous Spells',
                                    jp: '危険な魔法'
                                },
                                description: {
                                    en: '+25% critical hit damage',
                                    jp: 'クリティカルダメージ+25% ※要：宿題、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Terror',
                                    jp: '恐怖'
                                },
                                description: {
                                    en: '+3% chance to stun target for 1 second when dealing damage to a target (max 15%)',
                                    jp: '対象にダメージを与えた際に3%の確率で対象を1秒間スタンする (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Physical Education',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% movement speed (max 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Rising Power',
                                    jp: 'ライジングパワー'
                                },
                                description: {
                                    en: '+0.7% spell power per your character level',
                                    jp: '自分のレベルごとに魔法威力+0.7% ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        directory: 'owl',
        name: {
            en: 'The Mechanical Owl',
            jp: 'メカフクロウ'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Owlish Wisdom',
                                    jp: 'フクロウの知恵'
                                },
                                description: {
                                    en: '+1% spell power and +3% faster spell regeneration (max 5% & 15%)',
                                    jp: '魔法威力+1%、リチャージ速度+3% (最大5% & 15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Thick-Skinned',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+2% damage resistance (max 10%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Battlebird',
                                    jp: 'バトルバード'
                                },
                                description: {
                                    en: '+2% spell power and +3% maximum health (max 10% & 15%)',
                                    jp: '魔法威力+2%、最大HP+3% (最大10% & 15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Improved Circuitry',
                                    jp: '改良回路'
                                },
                                description: {
                                    en: '-15% shorter stun duration (max -75%)',
                                    jp: 'スタンの効果時間短縮-15% (最大75%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Viridity',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+4% Life spell power (max 20%)',
                                    jp: '生命魔法威力+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Static Charge',
                                    jp: '静電荷'
                                },
                                description: {
                                    en: '5% chance to deal 50 additional Lightning damage with melee attacks (max 25%)',
                                    jp: '近接攻撃時に5%の確率で50の雷属性ダメージを与える (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Conserve Energy',
                                    jp: 'エネルギー節約'
                                },
                                description: {
                                    en: '+20% faster spell regeneration while standing still (max 100%)',
                                    jp: '立ち止まっている時のリチャージ速度+20% (最大100%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Lightning Wards',
                                    jp: '雷の加護'
                                },
                                description: {
                                    en: '+4% Lightning resistance to you and your fellow students (max 20%)',
                                    jp: '自分と仲間の学生の雷耐性+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Arcane Infusion',
                                    jp: '神秘の浸出液'
                                },
                                description: {
                                    en: '+4% channeled spell and projectile spell power (max 20%)',
                                    jp: 'チャネリング魔法と魔弾威力+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Reconstruct',
                                    jp: '再構成'
                                },
                                description: {
                                    en: '+25% increased effects from healing while standing still',
                                    jp: '立ち止まっている時の被ヒール量+25% ※要：エネルギー節約、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Electrostatic Field',
                                    jp: '静電場'
                                },
                                description: {
                                    en: 'Whenever Lightning damage is dealt in battle you gain +25% faster spell regeneration and +20% increased spell power for next 2 seconds. Timer reset every time Lightning damage is done.',
                                    jp: '戦闘で雷属性ダメージが発生すると、それから2秒間、リチャージ速度+25%、魔法威力+20%。雷属性ダメージを与えるたびにタイマーはリセットされる ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Lightning Infusion',
                                    jp: '雷の浸出液'
                                },
                                description: {
                                    en: '+2% Lightning spell damage, Lightning stun duration lasts 5% longer (max 10% & 25%)',
                                    jp: '雷魔法ダメージ+2%、雷魔法によるスタンの効果時間5%延長 (最大10% & 25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Inductance',
                                    jp: 'インダクタンス'
                                },
                                description: {
                                    en: '+5% faster Lightning spell regeneration (max 25%)',
                                    jp: '雷魔法のリチャージ速度+5% (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Nest Egg',
                                    jp: '貯蓄'
                                },
                                description: {
                                    en: '+2% Lightning spell charges and +4% faster Lightning spell regeneration (max 10% & 20%)',
                                    jp: '雷魔法の最大チャージ+2%、雷魔法のリチャージ速度+4% (最大10% & 20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Sparkplug',
                                    jp: 'スパークプラグ'
                                },
                                description: {
                                    en: '+15% chance to deal 25 Lightning damage to attacker when taking melee damage (max 75%)',
                                    jp: '近接ダメージを受けた際、15%の確率で相手に25の雷属性ダメージを与える (最大75%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Birds of a Feather',
                                    jp: '梟合の衆'
                                },
                                description: {
                                    en: '+2% Lightning spell power for you and your fellow students (max 10%)',
                                    jp: '自分と仲間の学生の雷魔法威力+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Well-Focused Owl',
                                    jp: 'フクロウの集中'
                                },
                                description: {
                                    en: '+3% critical hit chance with Ligthning spells (max 15%)',
                                    jp: '雷魔法でのクリティカル発生率+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Lightningstuck',
                                    jp: '落雷'
                                },
                                description: {
                                    en: 'Target hit by Lightning spells has 15% chance to become imbued by Lightning for 2 seconds. During this time target radiates Lightning damage to nearby targets, dealing 40 Lightning damage over 2 sec (max 75%)',
                                    jp: '雷魔法がヒットした対象を15%の確率で2秒間、帯電状態にする。効果が続いている間、対象は近くにいる対象に雷属性ダメージを放射し、2秒間で40の雷属性ダメージを与える (最大75%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Bigger Batteries',
                                    jp: '大容量バッテリー'
                                },
                                description: {
                                    en: '+8% Lightning spell charges (max 40%)',
                                    jp: '雷魔法の最大チャージ+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Bird of Prey',
                                    jp: '猛禽'
                                },
                                description: {
                                    en: '+2% critical hit damage per character level',
                                    jp: '自分のレベルごとにクリティカルダメージ+2% ※要：フクロウの集中、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Eye of Storm',
                                    jp: '台風の目'
                                },
                                description: {
                                    en: '+20% Lightning spell damage, +10% increased critical hit chance with Lightning spells',
                                    jp: '雷魔法ダメージ+20%、雷魔法でのクリティカル発生率+10% ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max 25%)',
                                    jp: '最大HP+5% (最大+25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Lightning Resistance',
                                    jp: '雷耐性'
                                },
                                description: {
                                    en: '+8% Lightning resistance (max 40%)',
                                    jp: '雷耐性+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Burst of Flight',
                                    jp: '急速離陸'
                                },
                                description: {
                                    en: '+6% movement speed for 4 seconds whenever you take damage (max 30%)',
                                    jp: 'ダメージを受けた際、4秒間、移動速度+6% (最大30%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Panic Casting',
                                    jp: 'パニックマジック'
                                },
                                description: {
                                    en: '+4% damage resistance for 4 seconds while casting spells (max 20%)',
                                    jp: '魔法を発動している間の4秒間、ダメージ耐性+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Transference Flash',
                                    jp: 'トランスフラッシュ'
                                },
                                description: {
                                    en: '3% of Lightning damage dealt is returned as healing (max 15%)',
                                    jp: '与えた雷属性ダメージの3%がヒールとして自分に戻ってくる (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Flux',
                                    jp: 'フラックス'
                                },
                                description: {
                                    en: '+10% Lightning resistance, +5% movement speed',
                                    jp: '雷耐性+10%、移動速度+5% ※要：雷耐性、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Mana Barrier',
                                    jp: 'マナバリア'
                                },
                                description: {
                                    en: '3% of your spell damage dealt creates a damage absorbing barrier around you with a max 100 barrier points. Lasts 5 seconds if damage is not dealt (max 15%)',
                                    jp: '与えた魔法ダメージの3%のバリアポイントを持つ、ダメージを吸収するバリアが自分の周りに張られる。バリアポイントは最大100まで貯まる。5秒間魔法ダメージを与えないと消滅する (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Shock Treatment',
                                    jp: 'ショック療法'
                                },
                                description: {
                                    en: 'Your spells have a +10% longer Lightning stun duration (max 50%)',
                                    jp: '雷魔法によるスタンの効果時間+10% (最大50%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Lightning Insulation',
                                    jp: '絶縁'
                                },
                                description: {
                                    en: '+30% Lightning resistance',
                                    jp: '雷耐性+30% ※要：フラックス、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Supercharged',
                                    jp: 'スーパーチャージ'
                                },
                                description: {
                                    en: 'Whenever you cast Lightning spells you gains a small aura that electrocutes everyone around you every 1 second for 50 Lightning damage. This aura disappears after 2 seconds if Lightning spells are not cast.',
                                    jp: '雷魔法を発動すると、自分の周囲にいる全員を感電させる小さなオーラを纏う。オーラは1秒ごとに50の雷属性ダメージを与える。雷魔法が発動されないまま2秒が経過するとオーラは消滅する。※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        directory: 'nim',
        name: {
            en: 'Nim the Cleaner',
            jp: 'ニム'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: '属性耐性'
                                },
                                description: {
                                    en: '+3% Fire, Ice and Lightning resistance (max 15%)',
                                    jp: '炎・氷・雷耐性+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Thick-Skinned',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+2% damage resistance (max 10%)',
                                    jp: 'ダメージ耐性+2％ (最大10％)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Viridity',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: '生命魔法威力+3％ (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Jinx',
                                    jp: 'ジンクス'
                                },
                                description: {
                                    en: 'Target becomes 5% more vulnerable to spell damage for 10 seconds after you deal them a melee hit (max 25%)',
                                    jp: '近接攻撃を与えた後、対象の魔法ダメージ耐性を10秒間、5%低下させる。 (最大25％）'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Transference',
                                    jp: '転換'
                                },
                                description: {
                                    en: '2% of spell damage done is returned to you as healing (max 10%)',
                                    jp: '与えた魔法ダメージの2％がヒールとして自分に戻ってくる (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Battlecleaner',
                                    jp: '戦闘の掃除屋'
                                },
                                description: {
                                    en: '+2% spell power and +3% maximum health (max 10% & 15%)',
                                    jp: '魔法威力+2％、最大HP +3％ (最大10% & 15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Vigour',
                                    jp: '活力'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: 'クリティカル発生率+5% ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Spellbook',
                                    jp: '魔法書'
                                },
                                description: {
                                    en: '+1% spell power per each spell you have in your spellbook (max 5%)',
                                    jp: '魔法書の魔法1つにつき、魔法威力+1% (最大5%) ※要：戦闘の掃除屋 ※ 魔法の威力だけでなく、近接ダメージも上がります。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Chastise',
                                    jp: '懲罰'
                                },
                                description: {
                                    en: '+8% critical hit damage (max 40%)',
                                    jp: 'クリティカルダメージ+8％ (最大40%) ※要：活力'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Squeaky Clean',
                                    jp: 'ピカピカ仕上げ'
                                },
                                description: {
                                    en: 'Each target killed grants +1% spell and melee damage for the duration of the level. The effect stack up to 40%.',
                                    jp: '対象を撃破するごとに、そのステージにいる間の魔法・近接ダメージを+1％。効果は最大40%まで蓄積する。※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Spellcraft',
                                    jp: '魔術精製'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '魔法威力+2％ (最大10％)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Toe to Toe',
                                    jp: '真っ向勝負'
                                },
                                description: {
                                    en: '+14% melee damage (max 70%)',
                                    jp: '近接ダメージ+14％ (最大70％)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Channeler',
                                    jp: 'チャネラー'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: 'チャネリング魔法のダメージがチャネリング1秒ごとに+1秒上昇、最大で+5%まで上昇する (最大5％ & 25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Spellslinger',
                                    jp: 'スペルリンガー'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '魔弾威力+3％ (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Homework',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: 'クリティカル発生率+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Furious Sweeping',
                                    jp: '怒りのほうき'
                                },
                                description: {
                                    en: '+10% melee damage. Each melee hit you deal increases critical hit chance by additional +4% up to 10% for next 10 seconds.',
                                    jp: '近接ダメージ+10％。近接攻撃がヒットするごとに10秒間、クリティカル発生率がさらに+4%される。最大10％まで ※最大1/1 ※要：真っ向勝負'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Steamed Up',
                                    jp: '怒気'
                                },
                                description: {
                                    en: '4% chance to deal 70 steam damage when dealing a melee attack (20%)',
                                    jp: '近接攻撃時に4%の確立で70の氷属性ダメージを与える (最大20)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Spirited',
                                    jp: '渾身'
                                },
                                description: {
                                    en: '+5% spell charges (max 25%)',
                                    jp: '魔法の最大チャージ+5％ (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Turmoil',
                                    jp: '混乱'
                                },
                                description: {
                                    en: '+3% spell power and melee damage for 4 seconds after killing a target (max 15% & 8s)',
                                    jp: '攻撃撃破後、4秒間、魔法威力と近接ダメージ+3％ (最大15% & 8s)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Cleansing Transference',
                                    jp: '昇華'
                                },
                                description: {
                                    en: '20% of spell damage done is returned as healing, +10% melee damage.',
                                    jp: '与えた魔法ダメージの20％がヒールとして自分に戻ってくる。近接ダメージ+10% ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max 25%)',
                                    jp: '最大HP+5% (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Ponderance',
                                    jp: '重み'
                                },
                                description: {
                                    en: '+3% faster spell regeneration for you and your fellow students (max 15%)',
                                    jp: '自分と仲間の学生のリチャージ速度+3％ (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Physical Education',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% movement speed (max 10%)',
                                    jp: '移動速度+2％ (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Elemental Wards',
                                    jp: '属性の加護'
                                },
                                description: {
                                    en: '+1% Fire, Ice and Lightning resistance for you and your fellow students (max 5%)',
                                    jp: '自分と仲間の学生の炎・氷・雷耐性+1％ (最大5%) ※要：重み'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Underhanded',
                                    jp: '悪知恵'
                                },
                                description: {
                                    en: '4% of melee damage dealt is returned as healing (max 20%)',
                                    jp: '与えた近接ダメージの4%がヒールとして自分に戻ってくる (最大20％) ※誤植で最大0％になっている'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Sheltering',
                                    jp: '保護'
                                },
                                description: {
                                    en: '4% maximum health for you and your fellow students (max 20%)',
                                    jp: '自分と仲間の学生の最大HP+4% (最大20%) 要：属性の加護'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Rising Spirits',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+0.25 health per character level (max 1.25)',
                                    jp: '自分のレベルごとにHP+0.25 (最大1.25)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Pressure Points',
                                    jp: 'ツボ'
                                },
                                description: {
                                    en: 'Your melee attacks have 5% chance to stun target for 1 second (max 25%)',
                                    jp: '近接攻撃時、0％の確率で対象を1秒間スタンさせる (最大30%) ※0%は6%の誤植か？'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Cleaning Day',
                                    jp: '大掃除'
                                },
                                description: {
                                    en: '+2% critical hit chance for you and your fellow students (max 10%)',
                                    jp: '自分と仲間の学生のクリティカル発生率+2% (最大10％) ※要：保護防護マスク：最大HP+6%、ダメージ耐性+1% (最大30% & 5%) ※要：ライジングスピリッツ'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Mask of Protection',
                                    jp: '防護マスク'
                                },
                                description: {
                                    en: '+6% maximum health and +1% damage resistance (max 30% & 5%)',
                                    jp: '最大HP+6%、ダメージ耐性+1% (最大30% & 5%) ※要：ライジングスピリッツ'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'The Cleaner',
                                    jp: '掃除屋'
                                },
                                description: {
                                    en: 'Dealing melee damage creates an aura of Steam around the character, dealing 25 Steam damage every second around the character for 4 seconds.',
                                    jp: '近接ダメージを与えるとキャラクターの周りに蒸気を発生し、1秒毎に周囲に25の蒸気属性ダメージを4秒間与える ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        directory: 'amadeus',
        name: {
            en: 'Amadeus the Wizard',
            jp: 'アマデウス'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Spellcraft',
                                    jp: '魔術精製'
                                },
                                description: {
                                    en: '+3% spell power (max 15%)',
                                    jp: '魔法威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Spirited',
                                    jp: '渾身'
                                },
                                description: {
                                    en: '+4% spell charges (max 20%)',
                                    jp: '最大チャージ+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Thick-Skinned',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+2% damage resistance (max 10%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Box Expert',
                                    jp: '箱のエキスパート'
                                },
                                description: {
                                    en: '+8% Amadeus\' Box spell charges (max 40%)',
                                    jp: 'アマデウスの箱魔法の最大チャージ+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Composure',
                                    jp: '冷静'
                                },
                                description: {
                                    en: '+8% faster spell regeneration, bonus is lost for 5 seconds whenever taking damage (max 40%)',
                                    jp: 'リチャージ速度+8%、ダメージを受けると5秒間無効 (最大40%) ※要：渾身'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Rising Spirits',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+0.25 health per character level (max 1.25)',
                                    jp: '自分のレベルごとにHP+0.25 (最大1.25) ※要：厚い皮膚'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Confrontation',
                                    jp: '敵対'
                                },
                                description: {
                                    en: '+2% spell power and +1% critical hit chance (max 10% & 5%)',
                                    jp: '魔法威力+2%、クリティカル発生率+1% (最大10% & 5%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Vitality',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+10% maximum health and 5% damage dealt is returned to you as healing',
                                    jp: '最大HP+10%、与えたダメージの5%がヒールとして自分に戻ってくる ※要：ライジングスピリッツ、最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: '属性耐性'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '炎・氷・雷耐性+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Bravery',
                                    jp: '勇敢'
                                },
                                description: {
                                    en: '+3% critical hit chance, this bonus is lost for 5 seconds whenever taking damage (max 15%)',
                                    jp: 'クリティカル発生率+3%、ダメージを受けると5秒間無効 (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'More Box Magic',
                                    jp: '箱魔法増量'
                                },
                                description: {
                                    en: '+100% Amadeus\' Box spell charges',
                                    jp: 'アマデウスの箱魔法+100% ※最大1/1'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Hindrances',
                                    jp: '妨害'
                                },
                                description: {
                                    en: 'Your spells\' slowing and freezing effects last 5% longer and stun effects last 7% longer (max 25% & 35%)',
                                    jp: '魔法によるスロウ・凍結効果時間+5%、スタン効果時間+7% (最大25% & 35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Jinx',
                                    jp: 'ジンクス'
                                },
                                description: {
                                    en: 'Target becomes 5% more vulnerable to spell damage for 10 seconds after you deal them a melee hit (max 25%)',
                                    jp: '近接攻撃を与えた後、対象の魔法ダメージ耐性を10秒間、5%低下させる。 (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Channeler',
                                    jp: 'チャネラー'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: 'チャネリング魔法のダメージがチャネリング1秒ごとに+1%上昇、最大で+5%まで上昇する (最大5% & 25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Upheaval',
                                    jp: '大騒ぎ'
                                },
                                description: {
                                    en: '+4% throwable spell power (max 20%)',
                                    jp: '投てき魔法威力+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Spellslinger',
                                    jp: 'スペルスリンガー'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '魔弾威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Homework',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: 'クリティカル発生率+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Brainstorm',
                                    jp: 'ブレインストーミング'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: '対象撃破後2秒間、リチャージ速度+25% (最大125%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Thoughtful Criticism',
                                    jp: '批評'
                                },
                                description: {
                                    en: '+15% critical hit damage (max 75%)',
                                    jp: 'クリティカルダメージ+15% (最大75%) ※要：宿題'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Greater Hubris',
                                    jp: '大きな思い上がり'
                                },
                                description: {
                                    en: '+7% spell power for 3 seconds after a kill (max 35%)',
                                    jp: '対象撃破後3秒間、魔法威力+7% (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Exploding Box',
                                    jp: '爆発の箱'
                                },
                                description: {
                                    en: 'Amadeus\' Box explodes after use, dealing 150 Steam damage to everyone around it.',
                                    jp: 'アマデウスの箱が使用後に爆発し、周りの全員に150の蒸気属性ダメージを与える'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Viridity',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: '生命魔法威力+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max 25%)',
                                    jp: '最大HP+5% (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Resurrection Proficiency',
                                    jp: '蘇生の達人'
                                },
                                description: {
                                    en: '+10% resurrection speed (max 50%)',
                                    jp: '蘇生速度+10% (最大30%) ※ (最大50%) の誤りです。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Elusion',
                                    jp: '回避'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects, +7% shorter stun duration (max 35%)',
                                    jp: 'スロウ・凍結耐性+7%、スタン効果時間7%短縮 (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Transference',
                                    jp: '転換'
                                },
                                description: {
                                    en: '2% of spell damage dealt is returned as healing (max 10%)',
                                    jp: '与えた魔法ダメージの2%がヒールとして自分に戻ってくる (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Physical Education',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '2% faster movement speed (max 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Dashing Hero',
                                    jp: '熱血ヒーロー'
                                },
                                description: {
                                    en: '+5% damage resistance for 2 seconds after dealing melee damage (max 25%)',
                                    jp: '近接ダメージを与えてから2秒間、ダメージ耐性+5% (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: '躍動'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: '対象撃破後、10秒間HPが10回復 (最大50秒 & 10) ※ (最大10秒間 & 50) の誤りです。10秒間かけてHPが最大50回復します。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Clever Retort',
                                    jp: '反駁'
                                },
                                description: {
                                    en: '6% chance to stun whoever deals melee damage to you (max 30%)',
                                    jp: '近接攻撃をしてきた相手を6%の確率でスタンさせる (最大30%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Box of Benevolence',
                                    jp: '慈善の箱'
                                },
                                description: {
                                    en: 'Whenever Amadeus\' Box is thrown on the ground, it creates a stationary aura that boosts you and your fellow students\' spell power by +30% and slows enemies by 30%.',
                                    jp: 'アマデウスの箱が地面に投げられると、自分と仲間の魔法威力を+30%、敵に30%のスロウを付与するオーラをその場に放出する。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        directory: 'selius',
        name: {
            en: 'Selius Heatherwood',
            jp: 'セリウス'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Physical Education',
                                    jp: '身体学'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Hindrances',
                                    jp: 'ヒンドランス'
                                },
                                description: {
                                    en: 'Your spells\' slowing and freezing effects last 5% longer and stun effects last 7% longer (max 25%/35%)',
                                    jp: '魔法によるスロウ・凍結効果時間+5%、スタン効果時間+7% (最大25% & 35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Rush',
                                    jp: 'ラッシュ'
                                },
                                description: {
                                    en: '+5% movement speed for 4 seconds whenever you take damage (max 25%)',
                                    jp: 'ダメージを受けた際、4秒間、移動速度+5% (最大25%) ※要：身体学'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Sleep Paralysis',
                                    jp: '睡眠麻痺'
                                },
                                description: {
                                    en: 'Stunned and frozen targets take 15% more damage from your spells',
                                    jp: 'スタン・凍結状態の対象への魔法ダメージ+15% ※要：ヒンドランス'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Mana Flow',
                                    jp: 'マナフロー'
                                },
                                description: {
                                    en: '7% faster spell regeneration speed (max 35%)',
                                    jp: 'リチャージ速度+7% (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Temper Flare',
                                    jp: 'テンパーフレア'
                                },
                                description: {
                                    en: '+4% spell power for 10 seconds after taking damage (max 20%)',
                                    jp: '被ダメージ後10秒間、魔法威力+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+8% maximum health (max 40%)',
                                    jp: '最大HP+8% (最大40%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Streams of Magic',
                                    jp: '魔法の奔流'
                                },
                                description: {
                                    en: '+7% beam spell power (max 35%)',
                                    jp: 'ビーム魔法威力+7% (最大35%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Defiance',
                                    jp: 'デファイアンス'
                                },
                                description: {
                                    en: '+0.5% spell power for each percent of health missing',
                                    jp: 'HP低下分 ( % ) の魔法威力+0.5%'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Obstinance',
                                    jp: '執拗'
                                },
                                description: {
                                    en: '+5 health per level, and while spellcasting you regenerate 10 health every second for 3 seconds',
                                    jp: 'レベル当たり+5 HP、さらに詠唱中3秒間、毎秒10 HP回復 ※要：活気'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'The Prince\'s Shadow',
                                    jp: '王子の闇'
                                },
                                description: {
                                    en: 'Whenever your health drops below 25%, you regain all mana and blink charges and cast a shadow nova, freezing everyone around you and dealing 300 Shadow Ice damage. This can happen only once per fight.',
                                    jp: 'HPが25%未満の時、マナとブリンクを全快し、シャドウ・ノヴァで周囲の全員を凍結して、300の闇氷ダメージを与える。一度の戦闘で一度限り発動。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Friendly Shadows',
                                    jp: 'シャドウフレンド'
                                },
                                description: {
                                    en: 'Summons Friendly Shadows around you, attacking enemies in your aim direction every 2 seconds, deaing 10 damage (max 50)',
                                    jp: '周囲にシャドウフレンドを召喚する。シャドウフレンドはプレイヤーの照準方向の敵に2秒ごとに攻撃し、10のダメージを与える (最大50)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Light',
                                    jp: '光'
                                },
                                description: {
                                    en: '3% chance to deal additional 80 Shadow Fire damage with Fire spells (max 15%)',
                                    jp: '炎魔法に3%の確率で80の追加闇炎属性ダメージ (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Foreboding Presence',
                                    jp: '凶兆'
                                },
                                description: {
                                    en: 'Friendly Shadows deal 10 damage every 2 seconds to nearby enemies (max 50)',
                                    jp: 'シャドウフレンドが周囲の敵に2秒ごとに10のダメージを与える (最大50)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Aura of Dread',
                                    jp: '恐怖のオーラ'
                                },
                                description: {
                                    en: '9% chance to deal additional 20 Frost damage every second for 3 seconds with melee attack for you, your Friendly Shadows and fellow students (max 45%)',
                                    jp: '自分、自分のシャドウフレンド、味方の学生の近接攻撃で3秒間、9%の確率で1秒あたり20の氷ダメージ (最大45%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Darkness',
                                    jp: 'ダークネス'
                                },
                                description: {
                                    en: '5% chance to deal additional 40 Frost damage with Death spells (max 25%)',
                                    jp: '死属性の魔法に5%の確率で40の追加氷ダメージ (最大25%) ※要：光'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Potency',
                                    jp: '潜在力'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Death spell power (max 20%)',
                                    jp: '炎、氷、死属性魔法威力+4% (最大20%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Heatherwood Ancestry',
                                    jp: 'ヘザーウッド・アンセストリー'
                                },
                                description: {
                                    en: '+3% spell power and +3% maximum health (max 15%)',
                                    jp: '魔法威力+3%、最大HP +3% (最大10% ※ (最大15%) の誤りです。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Penumbra',
                                    jp: '半影'
                                },
                                description: {
                                    en: 'You gain 5 health with each manifestation of Light or Darkness (max 25)',
                                    jp: '光または闇が現れるたびに5 HP を回復 (最大25) ※要：ダークネス ※ 前提スキルの光またはダークネスが発動するたびに回復します。'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Solace in Shade',
                                    jp: '闇の慰撫'
                                },
                                description: {
                                    en: '+15% resistance against stunning, slowing and freezing effects for you and your fellow students',
                                    jp: '自分と仲間の学生にスタン・スロウ・凍結耐性+15%'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Casting Shadows',
                                    jp: 'キャスティング・シャドウ'
                                },
                                description: {
                                    en: 'Your spells reduce all elemental resistances of enemies by -3% while you gain +3% resistance against spells (max -15%/+15%)',
                                    jp: '魔法攻撃により敵の全属性耐性-3%と同時に自身の属性耐性+3% (最大-15%/+15%) ※要：ヘザーウッド・アンセストリー'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Ravenous Friends',
                                    jp: '強欲な友'
                                },
                                description: {
                                    en: 'Friendly Shadows attack 30% faster and steal enemy health, giving you 20 health with each attack',
                                    jp: 'シャドウフレンドの攻撃速度+30%、攻撃のたびに敵のHPを奪いプレイヤーのHPを20回復させる スキル(C)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Avoidance',
                                    jp: 'アヴォイダンス'
                                },
                                description: {
                                    en: '+3% resistance against stunning, slowing and freezing effects (max 15%)',
                                    jp: 'スタン・スロウ・凍結耐性+3% (最大15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Weariness',
                                    jp: 'ウィアリネス'
                                },
                                description: {
                                    en: '-5% slowing effect for 2 seconds to targets damaged by you (max -25%)',
                                    jp: 'ダメージを与えた対象に2秒間、-5%のスロウ効果 (最大-25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Forbidden Knowledge',
                                    jp: '禁断の知識'
                                },
                                description: {
                                    en: '+7% faster Death spell regeneration speed and +3% maximum health (max 35%/15%)',
                                    jp: '死属性魔法のリチャージ速度+7%、最大HP+3% (最大35%/15%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Nightmare Fuel',
                                    jp: '悪夢の焚物'
                                },
                                description: {
                                    en: '+5% Frost and Death spells charges (max 25%)',
                                    jp: '氷・死属性魔法の最大チャージ+5% (最大25%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Hidden Spark',
                                    jp: 'ヒドゥンスパーク'
                                },
                                description: {
                                    en: '2% chance to deal additional 110 Lightning damage with Frost spells (max 10%)',
                                    jp: '氷魔法に2%の確率で110の追加雷属性ダメージ (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 5,
                                name: {
                                    en: 'Heirloom Staff',
                                    jp: '伝家の宝杖'
                                },
                                description: {
                                    en: '6% chance to deal additional 20 Frost and 20 Death damage with staves (max 30%)',
                                    jp: '杖の攻撃に6%の確率で20の追加氷ダメージ20および追加死属性ダメージ (最大30%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                max: 5,
                                name: {
                                    en: 'Despairing Hope',
                                    jp: '絶望的な希望'
                                },
                                description: {
                                    en: '2% of all healing done in combat is transferred to you (max 10%)',
                                    jp: '戦闘中あらゆる回復の2%が自分に送られる (最大10%)'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 2,
                                max: 5,
                                name: {
                                    en: 'Shivers',
                                    jp: 'シバーズ'
                                },
                                description: {
                                    en: '+2% of all spell charges restored after killing a frozen enemy (max 10%)',
                                    jp: '凍結した敵を倒した後、全魔法チャージが+2%回復 (最大10%) ※要：ヒドゥンスパーク'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            },
                            {
                                slot: 3,
                                max: 1,
                                name: {
                                    en: 'Reprisal',
                                    jp: 'リプライサル'
                                },
                                description: {
                                    en: '+20% melee damage, and reflect 40% of melee damage taken',
                                    jp: '近接攻撃ダメージ+20%、さらに受けた近接攻撃ダメージ40%を反射 ※要：伝家の宝杖'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                max: 1,
                                name: {
                                    en: 'Solemn Resolve',
                                    jp: '厳粛なる決意'
                                },
                                description: {
                                    en: '+50% resistance against stunning, slowing and freezing effects, and for each missing percent of health, +0.3% of spell damage dealt is returned as health',
                                    jp: 'スタン・スロウ・凍結耐性+50%、与えた魔法ダメージの0.3%をHPとして吸収する'
                                },
                                ////// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                calculation: [
                                    {
                                        index: 700101,
                                        parcent: 8,
                                        duration: 10
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
