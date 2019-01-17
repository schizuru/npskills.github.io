var characters = [
    {
        name: {
            en: 'Cornelius',
            jp: 'コーネリアス'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Aptitude',
                                    jp: '素質'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: '魔法威力+1.5%、最大チャージ+2% (最大 7.5% & 10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Perseverance',
                                    jp: '忍耐力'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: 'リチャージ速度+5% (最大25%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Boxing Lessons',
                                    jp: 'ボクシングの練習'
                                },
                                description: {
                                    en: '+10% melee damage (max 50%)',
                                    jp: '近接ダメージ+10% (最大+50%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Viridity',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: '生命魔法威力+3% (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: '属性耐性'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '炎・氷・雷耐性+4% (最大20%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Field Work',
                                    jp: 'フィールドワーク'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '魔法威力+2%、範囲魔法の最大チャージ+4% (最大10% & 20%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elusion',
                                    jp: '回避'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects and +7% shorter stun duration (max 35% & 35%)',
                                    jp: 'スロウ・凍結耐性+7%、スタンの効果時間短縮+7% (最大35% & 35%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Crownsteed Pride',
                                    jp: 'クラウンスティード家の誇り'
                                },
                                description: {
                                    en: '+3% spell power (max 15%)',
                                    jp: '魔法威力+3% (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Vigour',
                                    jp: '活力'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: 'クリティカル発生率+5%'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Young Lord',
                                    jp: '若き領主'
                                },
                                description: {
                                    en: 'Each spell cast increases spell power by +8% for 10 seconds.',
                                    jp: '各魔法の威力が10秒間、8%アップ'
                                }
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
                                name: {
                                    en: 'Spellcraft',
                                    jp: '魔法精製'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '魔法威力+2% (最大10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Perserverance II',
                                    jp: '忍耐力Ⅱ'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: 'リチャージ速度+5% (最大25%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Channeler',
                                    jp: 'チャネラー'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: 'チャネリング魔法のダメージ+1%、チャネリング1秒ごとに最大+5% (最大5% & 25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Spellslinger',
                                    jp: 'スペルスリンガー'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '魔弾威力+3% (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Lead the Field',
                                    jp: 'フィールドの支配者'
                                },
                                description: {
                                    en: '+3% area spell power (max 15%)',
                                    jp: '範囲魔法威力+3% (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: '躍動'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: '対象撃破後、10秒間HPが10回復 (最大50秒間 & 10) ※ (最大10秒間 & 50) の誤りです。10秒間かけてHPが最大50回復します。'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Homework',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: 'クリティカル発生率+5% (最大10%) ※ +2%の誤りです。'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Hubris',
                                    jp: '思い上がり'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: '対象撃破後10秒間、魔法威力+3% (最大15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Brainstorm',
                                    jp: 'ブレインストーミング'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: '対象撃破後2秒間、リチャージ速度+25% (最大125%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Dangerous Spells',
                                    jp: '危険な魔法'
                                },
                                description: {
                                    en: '+25% critical hit damage',
                                    jp: 'クリティカルダメージ+25%'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Champion',
                                    jp: 'チャンピオン'
                                },
                                description: {
                                    en: '+10% critical hit chance, +20% spell power',
                                    jp: 'クリティカル発生率+10％、魔法威力+20%'
                                }
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
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '最大HP+5% (最大+25%) ※ ライジングスピリッツの後に適用されます。たとえば、最大HPの初期値300にライジングスピリッツ5 (+60*2.5) と活気5 (+25%) が適用されると563になります。'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Panic Casting',
                                    jp: 'パニックマジック'
                                },
                                description: {
                                    en: '+3% damage resistance for 2 seconds when casting spells (max 15%)',
                                    jp: '魔法発動時に2秒間、ダメージ耐性+3% (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Transference',
                                    jp: '転換'
                                },
                                description: {
                                    en: '+2% spell damage dealt is returned to you as health (max 10%)',
                                    jp: '与えた魔法ダメージの2%が自分のHPとして戻ってくる (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: 'サンドバッグ'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: '他の味方からの被ダメージを10%軽減 (最大50%) ※ 他の耐性・軽減とは別に適用されます。たとえば、耐性50%にサンドバッグ5を加えても耐性100%にはならず、被ダメージが25%になります。'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Echoing Enchantment',
                                    jp: '反響する魔力'
                                },
                                description: {
                                    en: '+20% chance to reflect 75% of damage dealt back to attacker when taking melee damage (max 100% chance)',
                                    jp: '近接ダメージを受けた際、20% (最大100%)の確率で、ダメージの75%を相手に跳ね返す ※ 被ダメージは減りません。'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Physical Education',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Duteous',
                                    jp: '忠実'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: 'スロウ・凍結・スタン耐性+5%、魔法ダメージ耐性+2% (最大25% & 10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Dignity',
                                    jp: '威厳'
                                },
                                description: {
                                    en: '+4% damage resistance while standing still (max 20%)',
                                    jp: '立ち止まっている時のダメージ耐性+4% (最大20%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Dodge!',
                                    jp: 'よけろ！'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '移動中のダメージ耐性+2% (最大10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Rising Spirits',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+0.5 health per character level (max 2.5)',
                                    jp: '自分のレベルごとにHP+0.5 (最大2.5)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Blue Blood',
                                    jp: '青い血'
                                },
                                description: {
                                    en: 'Nullifies fatal damage dealt to you and restores you to 20% of total health. Can only occur once in a fight.',
                                    jp: '戦闘不能になるダメージを受けた場合にそれを無効化し、最大HPの20%の状態で蘇生される。一度の戦闘で一度限り有効'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: {
            en: 'Gislan',
            jp: 'ギスラン'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Aptitude',
                                    jp: '魔術精製'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: '魔法威力+2% (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Perseverance',
                                    jp: 'マナフロー'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: 'リチャージ速度+7% (最大35%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Perseverance',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: '生命魔法威力+4% (最大20%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Boxing Lessons',
                                    jp: '自然の恵み'
                                },
                                description: {
                                    en: '+10% melee damage (max 50%)',
                                    jp: 'ヒールした対象の魔法威力と近接ダメージを10秒間+2%する (最大10%) ※ 生命の泉のヒール効果でも発動します。'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Viridity',
                                    jp: '生命の守護者'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: 'ヒール効果を与えた対象に10秒間、ダメージ耐性+2% (最大10%) ※ 生命の泉のヒール効果でも発動します。'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: 'フィールドワーク'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '魔法威力+2%、範囲魔法の最大チャージ+4% (最大10% & 20%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Field Work',
                                    jp: '悪だくみ'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '生命魔法の最大チャージ+5%、スタン・凍結の効果時間+5% (最大25% & 25%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Field Work',
                                    jp: '深い根'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '生命魔法の最大チャージ+15% ※要：生命力、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elusion',
                                    jp: '繁栄'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects and +7% shorter stun duration (max 35% & 35%)',
                                    jp: 'スタンの効果時間短縮+7%、ヒールした対象のスロウ・凍結耐性を5秒間+7% (最大35%) ※ 生命の泉のヒール効果でも発動します。'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Vigour',
                                    jp: '再生'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: '誰かをヒールすると自分のHPを2秒間に4回復する (最大20 & 2秒) ※ 生命の泉のヒール効果でも発動します。+5%'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Young Lord',
                                    jp: '四季咲き'
                                },
                                description: {
                                    en: 'Each spell cast increases spell power by +8% for 10 seconds.',
                                    jp: 'HP100%の時に生命魔法のリチャージ速度+45%。HPが減ると効果量も減少。自分が戦闘不能になると、1ステージに一度だけランダムな学生1人が蘇生される。戦闘不能の仲間がいない場合は自分を蘇生する'
                                }
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
                                name: {
                                    en: 'Spellcraft',
                                    jp: 'にぎやかな仲間'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '自分と仲間の学生の魔法威力+2％ (最大10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Channeler',
                                    jp: 'チャネラー'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: 'チャネリング魔法のダメージがチャネリング1秒ごとに+1%上昇、最大で+5%まで上昇する (最大5% & 25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Spellslinger',
                                    jp: 'スペルスリンガー'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '魔弾威力+3% (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Lead the Field',
                                    jp: '大騒ぎ'
                                },
                                description: {
                                    en: '+3% area spell power (max 15%)',
                                    jp: '投てき魔法威力+3% (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: '妨害'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: '魔法によるスロウ・凍結効果時間+5%、スタン効果時間+7% (最大25% & 35%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Homework',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Hubris',
                                    jp: '追跡のスリル'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: 'ダメージを与えた時2秒間、移動速度+4% (最大20%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Brainstorm',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: 'クリティカル発生率+2% (最大10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Dangerous Spells',
                                    jp: '予知能力'
                                },
                                description: {
                                    en: '+25% critical hit damage',
                                    jp: 'リチャージ速度+12% ※最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: '魅了',
                                    jp: 'チャンピオン'
                                },
                                description: {
                                    en: '+10% critical hit chance, +20% spell power',
                                    jp: 'HPが最大50%まで1%減るごとに魔法威力+0.5%。自分が戦闘不能になると、1ステージに1度だけランダムな学生1人が蘇生される。戦闘不能の仲間がいない場合は自分を蘇生する'
                                }
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
                                name: {
                                    en: 'Liveliness',
                                    jp: '春の儀式'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '蘇生速度+7% (最大35%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Panic Casting',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+3% damage resistance for 2 seconds when casting spells (max 15%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Transference',
                                    jp: '転換'
                                },
                                description: {
                                    en: '+2% spell damage dealt is returned to you as health (max 10%)',
                                    jp: '与えた魔法ダメージの2%がヒールとして自分に戻ってくる (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: '死属性耐性'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: '死属性耐性+8% (最大40%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Echoing Enchantment',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+20% chance to reflect 75% of damage dealt back to attacker when taking melee damage (max 100% chance)',
                                    jp: '自分のレベルごとにHP+1 ※最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Physical Education',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '最大HP+5% (最大25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Duteous',
                                    jp: 'パニックマジック'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '魔法を発動している間の4秒間、ダメージ耐性+4% (最大20%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Dignity',
                                    jp: '手招く生命'
                                },
                                description: {
                                    en: '+4% damage resistance while standing still (max 20%)',
                                    jp: '与えた魔法ダメージの1%がヒールとして自分と仲間の学生に戻ってくる (最大5%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Dodge!',
                                    jp: '属性耐性'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '炎・氷・雷耐性+4% (最大20%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Blue Blood',
                                    jp: '生命の泉'
                                },
                                description: {
                                    en: 'Nullifies fatal damage dealt to you and restores you to 20% of total health. Can only occur once in a fight.',
                                    jp: '自分と仲間のHPが2秒ごとに最大HPの2%分ヒールされる。死属性ダメージを受けるとヒールは止まり、繁栄、生命の守護者、自然の恵みを発動する。※ 「自分と仲間のHPを2秒ごとに最大HPの2%分ヒールし、繁栄、生命の守護者、自然の恵み、再生を発動する。死属性ダメージを受けるとヒールは20秒間止まる。」というのが正しい説明です。'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: {
            en: 'Marvek',
            jp: 'マーヴェック'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Aptitude',
                                    jp: '魔術精製'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: '魔法威力+2% (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Perseverance',
                                    jp: 'フィールドの支配者'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: '範囲魔法威力+3% (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Boxing Lessons',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '+10% melee damage (max 50%)',
                                    jp: 'クリティカル発生率+2% (最大10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Viridity',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: '着火'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '炎魔法で対象が炎上するようになる。炎上は10秒間で10の炎属性ダメージを与える (最大50ダメージ & 10秒)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Field Work',
                                    jp: '炎の加護'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '自分と仲間の学生の炎耐性+4% (最大20%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Field Work',
                                    jp: '気骨'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '炎魔法の最大チャージ+10% ※要：厚い皮膚、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elusion',
                                    jp: '懲罰'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects and +7% shorter stun duration (max 35% & 35%)',
                                    jp: 'クリティカルダメージ+7% (最大35%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Vigour',
                                    jp: '経験者'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: '炎属性ダメージを与えると、20%の確率で5秒間、リチャージ速度が+8%される (リチャージ速度最大40%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Vigour',
                                    jp: '沸騰寸前'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: '自分のレベルごとに炎魔法威力+0.3% ※要：気骨、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Young Lord',
                                    jp: '特別なレシピ'
                                },
                                description: {
                                    en: 'Each spell cast increases spell power by +8% for 10 seconds.',
                                    jp: '炎魔法以外の属性魔法を発動すると、それから15秒間、魔法威力が+10%される。この効果は、違う属性の魔法をかけるたびに最大3まで累積する。'
                                }
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
                                name: {
                                    en: 'Spellcraft',
                                    jp: '火力'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '炎魔法威力+3% (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Spellcraft',
                                    jp: '激怒'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '炎耐性+5%。炎魔法を発動してから5秒間、炎属性ダメージ+2% (最大25% & 10%) ※ 炎耐性も炎魔法を発動してから5秒間のみ有効です。'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Channeler',
                                    jp: '炎に包まれて'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: '7%の確率で、炎魔法で対象が炎上するようになる。炎上は2秒間で40の炎属性ダメージを与える (最大35%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Spellslinger',
                                    jp: 'サクサクの生地'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '対象が炎属性ダメージを受けた際、その対象へのヒール効果を3秒間、15%軽減する (最大75%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: 'ホットスポット'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: '対象の炎耐性-5% (最大-25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Homework',
                                    jp: '延焼'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '炎魔法でのクリティカル発生率+3% (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Homework',
                                    jp: '燃え盛る手'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '近接攻撃時に50%の確率で20の炎属性ダメージを与える ※要：激怒、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Hubris',
                                    jp: 'ベビーブーム'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: 'スモール・ファイヤーボール、ヒュージ・ファイヤーボール、カースド・メテオシャワー、ファイヤー・ブレットが7%の確率で3の小規模な爆発を起こすようになり、30の炎魔法の範囲ダメージを与える (最大35%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Brainstorm',
                                    jp: 'ブロートーチ'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: '炎魔法でのクリティカルダメージ+7% (最大35%) ※要：延焼'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Dangerous Spells',
                                    jp: 'タフ・クッキー'
                                },
                                description: {
                                    en: '+25% critical hit damage',
                                    jp: '戦闘不能時、自分を倒した相手に100の炎属性ダメージを与える。この効果で相手を倒すと、HP15%の状態で自分を蘇生する。蘇生は一度の戦闘で一度限り有効 (最大200 & 75%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: '魅了',
                                    jp: '先導者'
                                },
                                description: {
                                    en: '+10% critical hit chance, +20% spell power',
                                    jp: '自分と仲間の学生の炎魔法威力+20%、炎耐性+20% ※最大1/1'
                                }
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
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '最大HP+5% (最大+25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Panic Casting',
                                    jp: '炎耐性'
                                },
                                description: {
                                    en: '+3% damage resistance for 2 seconds when casting spells (max 15%)',
                                    jp: '炎耐性+8% (最大40%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Transference',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% spell damage dealt is returned to you as health (max 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: 'マナフロー'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: 'リチャージ速度7% (最大35%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Physical Education',
                                    jp: '氷耐性'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '氷耐性+8% (最大40%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Duteous',
                                    jp: '雷耐性'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '雷耐性+8% (最大40%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Duteous',
                                    jp: 'ファイヤーブランド'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '近接攻撃すると10秒間で100のHPを回復する。近接攻撃の度に効果時間は更新される ※最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Dignity',
                                    jp: 'マナバリア'
                                },
                                description: {
                                    en: '+4% damage resistance while standing still (max 20%)',
                                    jp: '与えた魔法ダメージの3%のバリアポイントを持つ、ダメージを吸収するバリアが自分の周りに張られる。バリアポイントは最大100まで貯まる。5秒間魔法ダメージを与えないと消滅する (最大15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Dodge!',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '自分のレベルごとにHP+0.5 (最大2.5)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Blue Blood',
                                    jp: '熱中症'
                                },
                                description: {
                                    en: 'Nullifies fatal damage dealt to you and restores you to 20% of total health. Can only occur once in a fight.',
                                    jp: '炎魔法で対象が1秒間スタンするようになり、40の炎属性ダメージを与える ※最大1/1 ※ 炎耐性100%以上でもスタンします。'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: {
            en: 'Carabel',
            jp: 'カラベル'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Aptitude',
                                    jp: '魔術精製'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: '魔法威力+2% (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Perseverance',
                                    jp: '震える指'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: '近接攻撃時に5%の確率で50の氷属性ダメージを与える (最大25% & 50)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Boxing Lessons',
                                    jp: '寒冷地仕様'
                                },
                                description: {
                                    en: '+10% melee damage (max 50%)',
                                    jp: 'スロウ・凍結耐性+20% (最大100%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Viridity',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: 'バトルメイジ'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '魔法威力+2%、最大HP+3% (最大10% & 15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Field Work',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '生命魔法威力+4% (最大20%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elusion',
                                    jp: '氷の加護'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects and +7% shorter stun duration (max 35% & 35%)',
                                    jp: '自分と仲間の学生の氷耐性+4% (最大20%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Vigour',
                                    jp: 'ジンクス'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: '近接攻撃を与えた後、対象の魔法ダメージ耐性を10秒間、5%低下させる。(最大25%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Vigour',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: '自分のレベルごとにHP+2 ※要：厚い皮膚、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Young Lord',
                                    jp: '急速冷凍'
                                },
                                description: {
                                    en: 'Each spell cast increases spell power by +8% for 10 seconds.',
                                    jp: '氷魔法の最大チャージ+50% ※最大1/1'
                                }
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
                                name: {
                                    en: 'Spellcraft',
                                    jp: '雪の乙女'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '氷魔法威力+3% (最大15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Spellcraft',
                                    jp: '氷との調和'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '氷魔法のリチャージ速度+7% (最大35%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Channeler',
                                    jp: '氷攻め'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: '魔法で与えるスロウ・凍結の効果時間を10%延長する (最大50%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Spellslinger',
                                    jp: '冷遇'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '近接ダメージを受けた際、15%の確率でその相手に50の氷属性ダメージを与える (最大75%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: 'ディープフリーズ'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: '対象に与える凍結の効果時間が、10%の確率で0.5秒間延長される (最大50% & 2.5秒)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Homework',
                                    jp: '冬の嵐'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '氷魔法のクリティカル発生率+3% (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Brainstorm',
                                    jp: '極寒'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: '氷魔法威力+3%、氷魔法の最大チャージ+5% (最大15% & 25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Dangerous Spells',
                                    jp: '厳しい冬'
                                },
                                description: {
                                    en: '+25% critical hit damage',
                                    jp: '対象の氷耐性-5% (最大-25%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Hubris',
                                    jp: '薄い氷の上'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: 'スロウ・凍結状態の対象への魔法ダメージ+15% ※要：冷遇、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: '魅了',
                                    jp: '氷の大地'
                                },
                                description: {
                                    en: '+10% critical hit chance, +20% spell power',
                                    jp: '凍結状態の対象を倒すと、対象が爆発して氷のフィールドを作る。フィールドの上にいる全員が1秒ごとに30の氷属性ダメージを5秒間受ける ※最大1/1'
                                }
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
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '最大HP+5% (最大+25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Panic Casting',
                                    jp: '氷耐性'
                                },
                                description: {
                                    en: '+3% damage resistance for 2 seconds when casting spells (max 15%)',
                                    jp: '氷耐性+8% (最大40%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Transference',
                                    jp: '炎耐性'
                                },
                                description: {
                                    en: '+2% spell damage dealt is returned to you as health (max 10%)',
                                    jp: '炎耐性+8% (最大40%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: '死属性耐性'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: '死属性耐性+8% (最大40%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: '雷耐性'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: '雷耐性+8% (最大40%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Physical Education',
                                    jp: '寒冷前線'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '与えた氷属性ダメージの3%がヒールとして自分に戻ってくる (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Duteous',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '移動速度+2％ (最大10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Dignity',
                                    jp: '雪玉'
                                },
                                description: {
                                    en: '+4% damage resistance while standing still (max 20%)',
                                    jp: '氷魔法発動後、他の魔法のリチャージ速度を5秒間+7%する (最大35%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Dodge!',
                                    jp: '全力'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '近接攻撃を与えた後に2秒間、ダメージ耐性+4% (最大20%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Dodge!',
                                    jp: 'ひと休み'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: 'リチャージ速度+20%。ダメージを受けると、この効果は5秒間発動しない ※最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Blue Blood',
                                    jp: 'アイスバリア'
                                },
                                description: {
                                    en: 'Nullifies fatal damage dealt to you and restores you to 20% of total health. Can only occur once in a fight.',
                                    jp: '与えた氷魔法ダメージの10%のバリアポイントを持つアイスシールドが自分の周りに張られる。バリアポイントは最大で100まで貯まる。20秒間魔法ダメージを与えないと消滅する。※最大1/1'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: {
            en: 'Rudolfus',
            jp: 'ルドルファス'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Aptitude',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Perseverance',
                                    jp: '素質'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: '魔法威力1.5%、魔法の最大チャージ+2% (最大7.5% & 10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Boxing Lessons',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+10% melee damage (max 50%)',
                                    jp: '最大HP+5% (最大+25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Viridity',
                                    jp: 'マナフロー'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: 'リチャージ速度+7% (最大35%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: '混沌と調和'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '生命・死属性魔法の最大チャージ+7% (最大35%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Field Work',
                                    jp: 'ジンクス'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '近接攻撃を与えた後、対象の魔法ダメージ耐性を10秒間、5%低下させる (最大25%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Field Work',
                                    jp: '呪いの領域'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '範囲魔法威力+7% ※要：素質、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elusion',
                                    jp: '死の加護'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects and +7% shorter stun duration (max 35% & 35%)',
                                    jp: '自分と仲間の学生の死属性耐性+4% (最大20%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Vigour',
                                    jp: '死の息吹'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: '魂の状態の仲間1人につき自分のクリティカル率を+3%し、仲間の蘇生速度を+5%する (最大15％ & 25%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Vigour',
                                    jp: '死の領域'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: '範囲魔法威力+7% ※要：呪いの領域、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Young Lord',
                                    jp: '死のオーブ'
                                },
                                description: {
                                    en: 'Each spell cast increases spell power by +8% for 10 seconds.',
                                    jp: '対象を倒すと死のオーブが生成され、触れている者すべてに1秒ごとに20の死属性ダメージを与える。死のオーブは30秒間有効。死のオーブ1つにつき、自分の魔法ダメージを+5%する ※最大1/1'
                                }
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
                                name: {
                                    en: 'Spellcraft',
                                    jp: '邪悪'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '死属性魔法威力+3% (最大15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Spellcraft',
                                    jp: '死属性耐性'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '死属性耐性+8% (最大40%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Channeler',
                                    jp: '命の輪'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: '対象が倒されるごとに自分のHPを8回復する (最大40)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Spellslinger',
                                    jp: '暗い影'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '死属性魔法の最大チャージ+6% (最大30%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: '衰退'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: '対象が死属性魔法でダメージを受けた際、その対象へのヒール効果を1秒間、20%軽減する (最大5秒間 & 100%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Homework',
                                    jp: '破滅の運命'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '対象の死属性耐性-5% (最大25%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Homework',
                                    jp: '邪悪なオーラ'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '自分からオーラを放出し、触れている者すべてに1秒ごとに10の死属性ダメージを与える。ダメージ耐性+3% (最大50 & 15%) ※要：暗い影'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Brainstorm',
                                    jp: '突然死'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: '死属性魔法のクリティカル発生率+3% (最大15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Hubris',
                                    jp: 'ヒル'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: '自分や他の仲間、または敵が与えた死属性ダメージの3%がヒールとして自分に戻ってくる (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: '魅了',
                                    jp: 'スペクトルライン'
                                },
                                description: {
                                    en: '+10% critical hit chance, +20% spell power',
                                    jp: '死属性魔法で相手を倒すと、その場所と自分を結ぶスペクトルラインを生成する。スペクトルラインに触れた敵は0.25秒ごとに30のダメージを受ける。味方の場合は0.25秒ごとに10のHPを回復する。スペクトルラインは10秒間有効。スペクトルラインを同時に放つことができるのは1人1本まで'
                                }
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
                                name: {
                                    en: 'Liveliness',
                                    jp: '妨害'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '魔法によるスロウ・凍結時間+5%、スタン効果時間+7%延長 (最大25% & 35%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Panic Casting',
                                    jp: 'フィールドワーク'
                                },
                                description: {
                                    en: '+3% damage resistance for 2 seconds when casting spells (max 15%)',
                                    jp: '魔法威力+2%、範囲魔法の最大チャージ+4% (最大10% & 20%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Transference',
                                    jp: '1vs1'
                                },
                                description: {
                                    en: '+2% spell damage dealt is returned to you as health (max 10%)',
                                    jp: '敵が近くにいる時、ダメージ耐性+3% (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: 'クリティカル発生率+2% (最大10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Physical Education',
                                    jp: '堕落'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '死属性魔法が7%の確率で対象に毒を付与するようになる。毒は10秒間で10のダメージを与える (最大35% & 10秒 & 50ダメージ)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Duteous',
                                    jp: '真っ向勝負'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '近接攻撃ダメージ+20% (最大100%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Duteous',
                                    jp: '危険な魔法'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: 'クリティカルダメージ+25% ※要：宿題、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Dignity',
                                    jp: '恐怖'
                                },
                                description: {
                                    en: '+4% damage resistance while standing still (max 20%)',
                                    jp: '対象にダメージを与えた際に3%の確率で対象を1秒間スタンする (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Dodge!',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Blue Blood',
                                    jp: 'ライジングパワー'
                                },
                                description: {
                                    en: 'Nullifies fatal damage dealt to you and restores you to 20% of total health. Can only occur once in a fight.',
                                    jp: '自分のレベルごとに魔法威力+0.7% ※最大1/1'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: {
            en: 'Owl',
            jp: 'メカフクロウ'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Aptitude',
                                    jp: 'フクロウの知恵'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: '魔法威力+1%、リチャージ速度+3% (最大5% & 15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Perseverance',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Boxing Lessons',
                                    jp: 'バトルバード'
                                },
                                description: {
                                    en: '+10% melee damage (max 50%)',
                                    jp: '魔法威力+2%、最大HP+3% (最大10% & 15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Viridity',
                                    jp: '改良回路'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: 'スタンの効果時間短縮-15% (最大75%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '生命魔法威力+4% (最大20%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Field Work',
                                    jp: '静電荷'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '近接攻撃時に5%の確率で50の雷属性ダメージを与える (最大25%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Field Work',
                                    jp: 'エネルギー節約'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '立ち止まっている時のリチャージ速度+20% (最大100%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elusion',
                                    jp: '雷の加護'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects and +7% shorter stun duration (max 35% & 35%)',
                                    jp: '自分と仲間の学生の雷耐性+4% (最大20%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Vigour',
                                    jp: '神秘の浸出液'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: 'チャネリング魔法と魔弾威力+4% (最大20%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Vigour',
                                    jp: '再構成'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: '立ち止まっている時の被ヒール量+25% ※要：エネルギー節約、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Young Lord',
                                    jp: '静電場'
                                },
                                description: {
                                    en: 'Each spell cast increases spell power by +8% for 10 seconds.',
                                    jp: '戦闘で雷属性ダメージが発生すると、それから2秒間、リチャージ速度+25%、魔法威力+20%。雷属性ダメージを与えるたびにタイマーはリセットされる ※最大1/1'
                                }
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
                                name: {
                                    en: 'Spellcraft',
                                    jp: '雷の浸出液'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '雷魔法ダメージ+2%、雷魔法によるスタンの効果時間5%延長 (最大10% & 25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Spellcraft',
                                    jp: 'インダクタンス'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '雷魔法のリチャージ速度+5% (最大25%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Channeler',
                                    jp: '貯蓄'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: '雷魔法の最大チャージ+2%、雷魔法のリチャージ速度+4% (最大10% & 20%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Spellslinger',
                                    jp: 'スパークプラグ'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '近接ダメージを受けた際、15%の確率で相手に25の雷属性ダメージを与える (最大75%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: '梟合の衆'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: '自分と仲間の学生の雷魔法威力+2% (最大10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Homework',
                                    jp: 'フクロウの集中'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '雷魔法でのクリティカル発生率+3% (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Brainstorm',
                                    jp: '落雷'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: '雷魔法がヒットした対象を15%の確率で2秒間、帯電状態にする。効果が続いている間、対象は近くにいる対象に雷属性ダメージを放射し、2秒間で40の雷属性ダメージを与える (最大75%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Hubris',
                                    jp: '大容量バッテリー'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: '雷魔法の最大チャージ+8% (最大40%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Hubris',
                                    jp: '猛禽'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: '自分のレベルごとにクリティカルダメージ+2% ※要：フクロウの集中、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: '魅了',
                                    jp: '台風の目'
                                },
                                description: {
                                    en: '+10% critical hit chance, +20% spell power',
                                    jp: '雷魔法ダメージ+20%、雷魔法でのクリティカル発生率+10% ※最大1/1'
                                }
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
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '最大HP+5% (最大+25%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Panic Casting',
                                    jp: '雷耐性'
                                },
                                description: {
                                    en: '+3% damage resistance for 2 seconds when casting spells (max 15%)',
                                    jp: '雷耐性+8% (最大40%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Transference',
                                    jp: '急速離陸'
                                },
                                description: {
                                    en: '+2% spell damage dealt is returned to you as health (max 10%)',
                                    jp: 'ダメージを受けた際、4秒間、移動速度+6% (最大30%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: 'パニックマジック'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: '魔法を発動している間の4秒間、ダメージ耐性+4% (最大20%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Physical Education',
                                    jp: 'トランスフラッシュ'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '与えた雷属性ダメージの3%がヒールとして自分に戻ってくる (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Duteous',
                                    jp: 'フラックス'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '雷耐性+10%、移動速度+5% ※要：雷耐性、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Dignity',
                                    jp: 'マナバリア'
                                },
                                description: {
                                    en: '+4% damage resistance while standing still (max 20%)',
                                    jp: '与えた魔法ダメージの3%のバリアポイントを持つ、ダメージを吸収するバリアが自分の周りに張られる。バリアポイントは最大100まで貯まる。5秒間魔法ダメージを与えないと消滅する (最大15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Dodge!',
                                    jp: 'ショック療法'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '雷魔法によるスタンの効果時間+10% (最大50%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Dodge!',
                                    jp: '絶縁'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '雷耐性+30% ※要：フラックス、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Blue Blood',
                                    jp: 'スーパーチャージ'
                                },
                                description: {
                                    en: 'Nullifies fatal damage dealt to you and restores you to 20% of total health. Can only occur once in a fight.',
                                    jp: '雷魔法を発動すると、自分の周囲にいる全員を感電させる小さなオーラを纏う。オーラは1秒ごとに50の雷属性ダメージを与える。雷魔法が発動されないまま2秒が経過するとオーラは消滅する。※最大1/1'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: {
            en: 'Nim',
            jp: 'ニム'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Aptitude',
                                    jp: '属性耐性'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: '炎・氷・雷耐性+3% (最大15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Perseverance',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: 'ダメージ耐性+2％ (最大10％)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Boxing Lessons',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+10% melee damage (max 50%)',
                                    jp: '生命魔法威力+3％ (最大15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Viridity',
                                    jp: 'ジンクス'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: '近接攻撃を与えた後、対象の魔法ダメージ耐性を10秒間、5%低下させる。 (最大25％）'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: '転換'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '与えた魔法ダメージの2％がヒールとして自分に戻ってくる (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Field Work',
                                    jp: '戦闘の掃除屋'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '魔法威力+2％、最大HP +3％ (最大10% & 15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Field Work',
                                    jp: '活力'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: 'クリティカル発生率+5% ※最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Elusion',
                                    jp: '魔法書'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects and +7% shorter stun duration (max 35% & 35%)',
                                    jp: '魔法書の魔法1つにつき、魔法威力+1% (最大5%) ※要：戦闘の掃除屋 ※ 魔法の威力だけでなく、近接ダメージも上がります。'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Vigour',
                                    jp: '懲罰'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: 'クリティカルダメージ+8％ (最大40%) ※要：活力'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Young Lord',
                                    jp: 'ピカピカ仕上げ'
                                },
                                description: {
                                    en: 'Each spell cast increases spell power by +8% for 10 seconds.',
                                    jp: '対象を撃破するごとに、そのステージにいる間の魔法・近接ダメージを+1％。効果は最大40%まで蓄積する。※最大1/1'
                                }
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
                                name: {
                                    en: 'Spellcraft',
                                    jp: '魔術精製'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '魔法威力+2％ (最大10％)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Spellcraft',
                                    jp: '真っ向勝負'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '近接ダメージ+14％ (最大70％)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Channeler',
                                    jp: 'チャネラー'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: 'チャネリング魔法のダメージがチャネリング1秒ごとに+1秒上昇、最大で+5%まで上昇する (最大5％ & 25%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Spellslinger',
                                    jp: 'スペルリンガー'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '魔弾威力+3％ (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: 'クリティカル発生率+2% (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Homework',
                                    jp: '怒りのほうき'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '近接ダメージ+10％。近接攻撃がヒットするごとに10秒間、クリティカル発生率がさらに+4%される。最大10％まで ※最大1/1 ※要：真っ向勝負'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Homework',
                                    jp: '怒気'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '近接攻撃時に4%の確立で70の氷属性ダメージを与える (最大20)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Brainstorm',
                                    jp: '渾身'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: '魔法の最大チャージ+5％ (最大25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Hubris',
                                    jp: '混乱'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: '攻撃撃破後、4秒間、魔法威力と近接ダメージ+3％ (最大15% & 8s)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: '魅了',
                                    jp: '昇華'
                                },
                                description: {
                                    en: '+10% critical hit chance, +20% spell power',
                                    jp: '与えた魔法ダメージの20％がヒールとして自分に戻ってくる。近接ダメージ+10% ※最大1/1'
                                }
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
                                name: {
                                    en: 'Liveliness',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '最大HP+5% (最大25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Panic Casting',
                                    jp: '重み'
                                },
                                description: {
                                    en: '+3% damage resistance for 2 seconds when casting spells (max 15%)',
                                    jp: '自分と仲間の学生のリチャージ速度+3％ (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Transference',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+2% spell damage dealt is returned to you as health (max 10%)',
                                    jp: '移動速度+2％ (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: '属性の加護'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: '自分と仲間の学生の炎・氷・雷耐性+1％ (最大5%) ※要：重み'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Physical Education',
                                    jp: '悪知恵'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '与えた近接ダメージの4%がヒールとして自分に戻ってくる (最大20％) ※誤植で最大0％になっている'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Duteous',
                                    jp: '保護'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '自分と仲間の学生の最大HP+4% (最大20%) 要：属性の加護'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Duteous',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '自分のレベルごとにHP+0.25 (最大1.25)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Dignity',
                                    jp: 'ツボ'
                                },
                                description: {
                                    en: '+4% damage resistance while standing still (max 20%)',
                                    jp: '近接攻撃時、0％の確率で対象を1秒間スタンさせる (最大30%) ※0%は6%の誤植か？'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Dodge!',
                                    jp: '大掃除'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '自分と仲間の学生のクリティカル発生率+2% (最大10％) ※要：保護防護マスク：最大HP+6%、ダメージ耐性+1% (最大30% & 5%) ※要：ライジングスピリッツ'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Dodge!',
                                    jp: '防護マスク'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '最大HP+6%、ダメージ耐性+1% (最大30% & 5%) ※要：ライジングスピリッツ'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Blue Blood',
                                    jp: '掃除屋'
                                },
                                description: {
                                    en: 'Nullifies fatal damage dealt to you and restores you to 20% of total health. Can only occur once in a fight.',
                                    jp: '近接ダメージを与えるとキャラクターの周りに蒸気を発生し、1秒毎に周囲に25の蒸気属性ダメージを4秒間与える ※最大1/1'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: {
            en: 'Amadeus',
            jp: 'アマデウス'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Aptitude',
                                    jp: '魔術精製'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: '魔法威力+3% (最大15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Perseverance',
                                    jp: '渾身'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: '最大チャージ+4% (最大20%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Perseverance',
                                    jp: '厚い皮膚'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: 'ダメージ耐性+2% (最大10%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Boxing Lessons',
                                    jp: '箱のエキスパート'
                                },
                                description: {
                                    en: '+10% melee damage (max 50%)',
                                    jp: 'アマデウスの箱魔法の最大チャージ+8% (最大40%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Viridity',
                                    jp: '冷静'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: 'リチャージ速度+8%、ダメージを受けると5秒間無効 (最大40%) ※要：渾身'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Viridity',
                                    jp: 'ライジングスピリッツ'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: '自分のレベルごとにHP+0.25 (最大1.25) ※要：厚い皮膚'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: '敵対'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '魔法威力+2%、クリティカル発生率+1% (最大10% & 5%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Field Work',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '最大HP+10%、与えたダメージの5%がヒールとして自分に戻ってくる ※要：ライジングスピリッツ、最大1/1'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elusion',
                                    jp: '属性耐性'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects and +7% shorter stun duration (max 35% & 35%)',
                                    jp: '炎・氷・雷耐性+4% (最大20%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Vigour',
                                    jp: '勇敢'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: 'クリティカル発生率+3%、ダメージを受けると5秒間無効 (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Young Lord',
                                    jp: '箱魔法増量'
                                },
                                description: {
                                    en: 'Each spell cast increases spell power by +8% for 10 seconds.',
                                    jp: 'アマデウスの箱魔法+100% ※最大1/1'
                                }
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
                                name: {
                                    en: 'Spellcraft',
                                    jp: '妨害'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '魔法によるスロウ・凍結効果時間+5%、スタン効果時間+7% (最大25% & 35%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Spellcraft',
                                    jp: 'ジンクス'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '近接攻撃を与えた後、対象の魔法ダメージ耐性を10秒間、5%低下させる。 (最大25%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Channeler',
                                    jp: 'チャネラー'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: 'チャネリング魔法のダメージがチャネリング1秒ごとに+1%上昇、最大で+5%まで上昇する (最大5% & 25%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Spellslinger',
                                    jp: '大騒ぎ'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '投てき魔法威力+4% (最大20%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Spellslinger',
                                    jp: 'スペルスリンガー'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '魔弾威力+3% (最大15%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: '宿題'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: 'クリティカル発生率+2% (最大10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Homework',
                                    jp: 'ブレインストーミング'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '対象撃破後2秒間、リチャージ速度+25% (最大125%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Brainstorm',
                                    jp: '批評'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: 'クリティカルダメージ+15% (最大75%) ※要：宿題'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Hubris',
                                    jp: '大きな思い上がり'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: '対象撃破後3秒間、魔法威力+7% (最大35%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: '魅了',
                                    jp: '爆発の箱'
                                },
                                description: {
                                    en: '+10% critical hit chance, +20% spell power',
                                    jp: 'アマデウスの箱が使用後に爆発し、周りの全員に150の蒸気属性ダメージを与える'
                                }
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
                                name: {
                                    en: 'Liveliness',
                                    jp: '生命力'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: '生命魔法威力+3% (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Panic Casting',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+3% damage resistance for 2 seconds when casting spells (max 15%)',
                                    jp: '最大HP+5% (最大25%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Transference',
                                    jp: '蘇生の達人'
                                },
                                description: {
                                    en: '+2% spell damage dealt is returned to you as health (max 10%)',
                                    jp: '蘇生速度+10% (最大30%) ※ (最大50%) の誤りです。'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: '回避'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: 'スロウ・凍結耐性+7%、スタン効果時間7%短縮 (最大35%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Physical Education',
                                    jp: '転換'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '与えた魔法ダメージの2%がヒールとして自分に戻ってくる (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Duteous',
                                    jp: '物理の勉強'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Duteous',
                                    jp: '熱血ヒーロー'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '近接ダメージを与えてから2秒間、ダメージ耐性+5% (最大25%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Dignity',
                                    jp: '躍動'
                                },
                                description: {
                                    en: '+4% damage resistance while standing still (max 20%)',
                                    jp: '対象撃破後、10秒間HPが10回復 (最大50秒 & 10) ※ (最大10秒間 & 50) の誤りです。10秒間かけてHPが最大50回復します。'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Dodge!',
                                    jp: '反駁'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '近接攻撃をしてきた相手を6%の確率でスタンさせる (最大30%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Blue Blood',
                                    jp: '慈善の箱'
                                },
                                description: {
                                    en: 'Nullifies fatal damage dealt to you and restores you to 20% of total health. Can only occur once in a fight.',
                                    jp: 'アマデウスの箱が地面に投げられると、自分と仲間の魔法威力を+30%、敵に30%のスロウを付与するオーラをその場に放出する。'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: {
            en: 'Selius',
            jp: 'セリウス'
        },
        trees: [
            {
                tiers: [
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Aptitude',
                                    jp: '身体学'
                                },
                                description: {
                                    en: '+1.5% spell power and +2% spell charges (max 7.5% & 10%)',
                                    jp: '移動速度+2% (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Perseverance',
                                    jp: 'ヒンドランス'
                                },
                                description: {
                                    en: '+5% faster spell regeneration (max 25%)',
                                    jp: '魔法によるスロウ・凍結効果時間+5%、スタン効果時間+7% (最大25% & 35%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Boxing Lessons',
                                    jp: 'ラッシュ'
                                },
                                description: {
                                    en: '+10% melee damage (max 50%)',
                                    jp: 'ダメージを受けた際、4秒間、移動速度+5% (最大25%) ※要：身体学'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Viridity',
                                    jp: '睡眠麻痺'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: 'スタン・凍結状態の対象への魔法ダメージ+15% ※要：ヒンドランス'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Viridity',
                                    jp: 'マナフロー'
                                },
                                description: {
                                    en: '+3% Life spell power (max 15%)',
                                    jp: 'リチャージ速度+7% (最大35%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elemental Resistance',
                                    jp: 'テンパーフレア'
                                },
                                description: {
                                    en: '+4% Fire, Ice and Lightning resistance (max 20%)',
                                    jp: '被ダメージ後10秒間、魔法威力+4% (最大20%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Field Work',
                                    jp: '活気'
                                },
                                description: {
                                    en: '+2% spell power, +4% area spell charges (max 10% & 20%)',
                                    jp: '最大HP+8% (最大40%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Elusion',
                                    jp: '魔法の奔流'
                                },
                                description: {
                                    en: '+7% resistance against slowing and freezing effects and +7% shorter stun duration (max 35% & 35%)',
                                    jp: 'ビーム魔法威力+7% (最大35%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Vigour',
                                    jp: 'デファイアンス'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: 'HP低下分 ( % ) の魔法威力+0.5%'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Vigour',
                                    jp: '執拗'
                                },
                                description: {
                                    en: '+5% critical hit chance',
                                    jp: 'レベル当たり+5 HP、さらに詠唱中3秒間、毎秒10 HP回復 ※要：活気'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Young Lord',
                                    jp: '王子の闇'
                                },
                                description: {
                                    en: 'Each spell cast increases spell power by +8% for 10 seconds.',
                                    jp: 'HPが25%未満の時、マナとブリンクを全快し、シャドウ・ノヴァで周囲の全員を凍結して、300の闇氷ダメージを与える。一度の戦闘で一度限り発動。'
                                }
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
                                name: {
                                    en: 'Spellcraft',
                                    jp: 'シャドウフレンド'
                                },
                                description: {
                                    en: '+2% spell power (max 10%)',
                                    jp: '周囲にシャドウフレンドを召喚する。シャドウフレンドはプレイヤーの照準方向の敵に2秒ごとに攻撃し、10のダメージを与える (最大50)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Channeler',
                                    jp: '光'
                                },
                                description: {
                                    en: 'Channeled spells deal +1% more damage each second spent channeling up to +5% (max 5% & 25%)',
                                    jp: '炎魔法に3%の確率で80の追加闇炎属性ダメージ (最大15%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Spellslinger',
                                    jp: '凶兆'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: 'シャドウフレンドが周囲の敵に2秒ごとに10のダメージを与える (最大50)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Spellslinger',
                                    jp: '恐怖のオーラ'
                                },
                                description: {
                                    en: '+3% projectile spell power (max 15%)',
                                    jp: '自分、自分のシャドウフレンド、味方の学生の近接攻撃で3秒間、9%の確率で1秒あたり20の氷ダメージ (最大45%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Reinvigorate',
                                    jp: 'ダークネス'
                                },
                                description: {
                                    en: '10 health is regenerated over 10 seconds after a kill (max 50 & 10 sec)',
                                    jp: '死属性の魔法に5%の確率で40の追加氷ダメージ (最大25%) ※要：光'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Homework',
                                    jp: '潜在力'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '炎、氷、死属性魔法威力+4% (最大20%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Homework',
                                    jp: 'ヘザーウッド・アンセストリー'
                                },
                                description: {
                                    en: '+2% critical hit chance (max 10%)',
                                    jp: '魔法威力+3%、最大HP +3% (最大10% ※ (最大15%) の誤りです。'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Brainstorm',
                                    jp: '半影'
                                },
                                description: {
                                    en: '+25% faster spell regeneration for 2 seconds after a kill (max 125%)',
                                    jp: '光または闇が現れるたびに5 HP を回復 (最大25) ※要：ダークネス ※ 前提スキルの光またはダークネスが発動するたびに回復します。'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Hubris',
                                    jp: '闇の慰撫'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: '自分と仲間の学生にスタン・スロウ・凍結耐性+15%'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Hubris',
                                    jp: 'キャスティング・シャドウ'
                                },
                                description: {
                                    en: '+3% increased spell power for 10 seconds after a kill (max 15%)',
                                    jp: '魔法攻撃により敵の全属性耐性-3%と同時に自身の属性耐性+3% (最大-15%/+15%) ※要：ヘザーウッド・アンセストリー'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: '魅了',
                                    jp: '強欲な友'
                                },
                                description: {
                                    en: '+10% critical hit chance, +20% spell power',
                                    jp: 'シャドウフレンドの攻撃速度+30%、攻撃のたびに敵のHPを奪いプレイヤーのHPを20回復させる スキル(C)'
                                }
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
                                name: {
                                    en: 'Liveliness',
                                    jp: 'アヴォイダンス'
                                },
                                description: {
                                    en: '+5% maximum health (max +25%)',
                                    jp: 'スタン・スロウ・凍結耐性+3% (最大15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Panic Casting',
                                    jp: 'ウィアリネス'
                                },
                                description: {
                                    en: '+3% damage resistance for 2 seconds when casting spells (max 15%)',
                                    jp: 'ダメージを与えた対象に2秒間、-5%のスロウ効果 (最大-25%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Transference',
                                    jp: '禁断の知識'
                                },
                                description: {
                                    en: '+2% spell damage dealt is returned to you as health (max 10%)',
                                    jp: '死属性魔法のリチャージ速度+7%、最大HP+3% (最大35%/15%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Practice Dummy',
                                    jp: '悪夢の焚物'
                                },
                                description: {
                                    en: '+10% less damage taken when hit by fellow students (max 50%)',
                                    jp: '氷・死属性魔法の最大チャージ+5% (最大25%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Physical Education',
                                    jp: 'ヒドゥンスパーク'
                                },
                                description: {
                                    en: '+2% faster movement speed (max 10%)',
                                    jp: '氷魔法に2%の確率で110の追加雷属性ダメージ (最大10%)'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Duteous',
                                    jp: '伝家の宝杖'
                                },
                                description: {
                                    en: '+5% resistance against slowing, freezing and stunning effects and +2% resistance against spell damage (max 25% & 10%)',
                                    jp: '杖の攻撃に6%の確率で20の追加氷ダメージ20および追加死属性ダメージ (最大30%)'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 1,
                                name: {
                                    en: 'Dignity',
                                    jp: '絶望的な希望'
                                },
                                description: {
                                    en: '+4% damage resistance while standing still (max 20%)',
                                    jp: '戦闘中あらゆる回復の2%が自分に送られる (最大10%)'
                                }
                            },
                            {
                                slot: 2,
                                name: {
                                    en: 'Dodge!',
                                    jp: 'シバーズ'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '凍結した敵を倒した後、全魔法チャージが+2%回復 (最大10%) ※要：ヒドゥンスパーク'
                                }
                            },
                            {
                                slot: 3,
                                name: {
                                    en: 'Dodge!',
                                    jp: 'リプライサル'
                                },
                                description: {
                                    en: '+2% damage resistance while moving (max 10%)',
                                    jp: '近接攻撃ダメージ+20%、さらに受けた近接攻撃ダメージ40%を反射 ※要：伝家の宝杖'
                                }
                            }
                        ]
                    },
                    {
                        slots: [
                            {
                                slot: 2,
                                name: {
                                    en: 'Blue Blood',
                                    jp: '厳粛なる決意'
                                },
                                description: {
                                    en: 'Nullifies fatal damage dealt to you and restores you to 20% of total health. Can only occur once in a fight.',
                                    jp: 'スタン・スロウ・凍結耐性+50%、与えた魔法ダメージの0.3%をHPとして吸収する'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];


