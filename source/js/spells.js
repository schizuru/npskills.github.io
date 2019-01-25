var spells = [
    {
        element: 'Fire',
        list: [
            {
                name: {
                    en: 'Small Fireball',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 50,
                charges: 8,
                regeneration: 3.5,
                description: {
                    en: 'Small Fireball explodes on hit, dealing damage to all caught in the blast radius.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Fire Beam',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Channeled',
                    jp: 'tttttt'
                },
                basePower: 70,
                charges: 'n/a',
                regeneration: 12,
                description: {
                    en: 'A continuous beam of Fire. After two seconds of continuous channeling, the target starts to suffer additional damage.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Fire Blast',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 75,
                charges: 3,
                regeneration: 4,
                description: {
                    en: 'A short-range blast, deals Fire damage.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Huge Fireball',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaProjectile',
                    jp: 'tttttt'
                },
                basePower: 150,
                charges: 3,
                regeneration: 45,
                description: {
                    en: 'Huge Fireball explodes on hit, dealing damage to all caught in the blast radius.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Fire Barrage',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 20,
                charges: 4,
                regeneration: 0.333,
                description: {
                    en: 'Multiple missiles bombard target area, dealing Fire damage.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Fire Bullets',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaProjectile Throwable',
                    jp: 'tttttt'
                },
                basePower: 30,
                charges: 2,
                regeneration: 40,
                description: {
                    en: 'A throwable ring of projectiles spiral outwards and inwards, dealing Fire damage.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Fire Totem',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 40,
                charges: 1,
                regeneration: 25,
                description: {
                    en: 'Conjures a spinning, Fire-breathing totem.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Rock of Fire',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 50 (20),
                charges: 2,
                regeneration: 16,
                description: {
                    en: 'A throwable, flaming rock that sets the target on fire.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Cursed Meteor Shower',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 50,
                charges: 1,
                regeneration: 20,
                description: {
                    en: 'Summon fireballs from the sky on an area or a target. The shower follows the target. If the target dies while the spell is active, a glowing ring will appear on the ground. The meteor shower is transferred to anyone entering the ring.,
                    jp: 'ddddddd'
                }
            },
        ]
    },
    {
        element: 'Ice',
        list: [
            {
                name: {
                    en: 'Ice Beam',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Channeled',
                    jp: 'tttttt'
                },
                basePower: 50,
                charges: 'n/a',
                regeneration: 12,
                description: {
                    en: 'A continuous beam of Ice. After continuous channeling, it slows and freezes the target.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Ice Bullets',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaProjectile Throwable',
                    jp: 'tttttt'
                },
                basePower: 30,
                charges: 2,
                regeneration: 40,
                description: {
                    en: 'A throwable ring of projectiles spiral outwards and inwards, dealing Ice damage.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Frost Cloud',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 200,
                charges: 2 (3),
                regeneration: 12,
                description: {
                    en: 'A large cloud that deals Ice damage. The damage is split evenly between everyone in the target area.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Frost Shard',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 50,
                charges: 8,
                regeneration: 4,
                description: {
                    en: 'Shoots out a shard that deals Ice damage to a single target.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Ice Nova',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Area',
                    jp: 'tttttt'
                },
                basePower: 50,
                charges: 4,
                regeneration: 4,
                description: {
                    en: 'An Ice blastwave bursts around the caster, affecting anyone caught in its wake, slowing and freezing them.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Frost Spray',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaChanneled',
                    jp: 'tttttt'
                },
                basePower: 35,
                charges: 'n/a',
                regeneration: 24,
                description: {
                    en: 'A burst of Ice, dealing damage to anyone caught in its wake, slowing and freezing them.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Ice Barrage',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 20,
                charges: 40,
                regeneration: 0.333,
                description: {
                    en: 'Multiple missiles bombard target area, dealing Ice damage.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Hailstorm',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 50,
                charges: 1,
                regeneration: 18,
                description: {
                    en: 'Conjures and area of icefall.',
                    jp: 'ddddddd'
                }
            }
        ]
    },
    {
        element: 'Death',
        list: [
            {
                name: {
                    en: 'Death Bolt',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 30 - 200,
                charges: 6,
                regeneration: 4,
                description: {
                    en: 'The longer the Death Bolt flies, the more damage it deals to its target.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Steal Heal',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 50,
                charges: 2,
                regeneration: 45,
                description: {
                    en: 'A Death magic projectile curses its target to suffer 50 Death damage continuously for 10 seconds. Whenever the target takes damage, everyone nearby is healed for the same amount.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Chain Death',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 180,
                charges: 3,
                regeneration: 35,
                description: {
                    en: 'A projectile that deals heavy Death damage. If its target is killed, the projectile arcs to the closest living character.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Pulsating Hex',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 10,
                charges: 1.5,
                regeneration: 15,
                description: {
                    en: 'A magical pulsating circle which deals Death magic damage in the area. As long as there is someone inside the circle, the Death damage increases with each passing pulsation.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Infectious Explosion',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 10,
                charges: 1,
                regeneration: 3,
                description: {
                    en: 'A throwable curse. Anyone infected suffers Death damage continuously for 10 seconds. If anyone dies while cursed, they explode, dealing Death damage and spreading the curse to anyone nearby.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Certain Death Spray',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaChanneled',
                    jp: 'tttttt'
                },
                basePower: 40,
                charges: 'n/a',
                regeneration: 35,
                description: {
                    en: 'A short-range burst that deals Death damage to anyone caught in its wake. If one continuous spray doesn't deal at least 400 damage, the remaining damage is dealt to the caster.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Touch Curse',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Touch',
                    jp: 'tttttt'
                },
                basePower: 1+,
                charges: 6,
                regeneration: 12,
                description: {
                    en: 'Curses a single target to take continuous Death damage, which can be cured only by inflicting it to three other targets via touch.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Death Barrage',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 30,
                charges: 40,
                regeneration: 0.333,
                description: {
                    en: 'Multiple missiles bombard target area, dealing Death damage.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Life and Death Curveball',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 15(75-150 Explosion),
                charges: 4,
                regeneration: 30,
                description: {
                    en: 'Spell consisting of a single healing Life projectile, and two Death magic projectiles. If projectiles fail to hit any target, they'll collide with each other and explode. The healing from the projectile elapses across time on target.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Death Circle',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 24,
                charges: 1,
                regeneration: 15,
                description: {
                    en: 'Conjures a Death circle which deals damage to everyone in it.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Deadly Sacrificial Bomb',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 20,
                charges: 1,
                regeneration: 30,
                description: {
                    en: 'A throwable bomb, explodes on impact. Everyone in its area is infected with a curse that deals Death damage for 10 seconds and heals the caster. If the caster takes damage simultaneously, everyone cursed is healed.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Death Beam',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Channeled',
                    jp: 'tttttt'
                },
                basePower: 70,
                charges: 'n/a',
                regeneration: 12,
                description: {
                    en: 'A continuous beam of Death magic, which also poisons the target.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Poison Flower',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 50,
                charges: 2,
                regeneration: 17,
                description: {
                    en: 'A throwable poison flower. When touched, the flower erupts and emanates a wave of Death magic.',
                    jp: 'ddddddd'
                }
            }
        ]
    },
    {
        element: 'Life',
        list: [
            {
                name: {
                    en: 'Heal Barrage',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 20,
                charges: 40,
                regeneration: 0.333,
                description: {
                    en: 'Multiple Life magic missiles bombard target area.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Large Life Circle',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 500,
                charges: 1,
                regeneration: 80,
                description: {
                    en: 'A large, throwable Life spell. The ring heals 500 points and expires when used up.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Healing Beam',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Channeled',
                    jp: 'tttttt'
                },
                basePower: 70,
                charges: 'n/a',
                regeneration: 12,
                description: {
                    en: 'A continuous beam of Life magic. Heals injured targets, but damages Death elements.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Huge Healball',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaProjectile',
                    jp: 'tttttt'
                },
                basePower: 150,
                charges: 2,
                regeneration: 15,
                description: {
                    en: 'Powerful Life magic projectile explodes on hit, affecting everyone in the area.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Life Bullets',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaProjectile Throwable',
                    jp: 'tttttt'
                },
                basePower: 40,
                charges: 2,
                regeneration: 40,
                description: {
                    en: 'A throwable ring of Life magic projectiles spiral outwards and inwards.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Small Life Circle',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Area',
                    jp: 'tttttt'
                },
                basePower: 20,
                charges: 3,
                regeneration: 30,
                description: {
                    en: 'A small Life circle is summoned by the caster for a short time. All targets in the circle are affected.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Life and Death Curveball',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 15(75-150 Explosion),
                charges: 4,
                regeneration: 30,
                description: {
                    en: 'Spell consisting of a single healing Life projectile, and two Death magic projectiles. If projectiles fail to hit any target, they'll collide with each other and explode. The healing from the projectile elapses across time on target.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Healing Spray',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaChanneled',
                    jp: 'tttttt'
                },
                basePower: 30,
                charges: 'n/a',
                regeneration: 3.999,
                description: {
                    en: 'A short-range spray of Life magic.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Touch Heal',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Touch',
                    jp: 'tttttt'
                },
                basePower: 30,
                charges: 1,
                regeneration: 15,
                description: {
                    en: 'Casts a Life spell that lasts for 10 seconds. Spreads to all targets within touching distance.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Bouncing Heal',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: Max HP - Current HP,
                charges: 3,
                regeneration: 25,
                description: {
                    en: 'A healing spell that arcs from one injured target to another. The spell expires when there are no more injured targets nearby.',
                    jp: 'ddddddd'
                }
            }
        ]
    },
    {
        element: 'Lightning',
        list: [
            {
                name: {
                    en: 'Lightning Barrage',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 20,
                charges: 40,
                regeneration: 0.333,
                description: {
                    en: 'Multiple missiles bombard target area, dealing Lightning damage.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Lightning Totems',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 50,
                charges: 1,
                regeneration: 60,
                description: {
                    en: 'Conjures two totems with a lightning current between them. Anyone crossing the current suffers damage.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Power Circle',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Area',
                    jp: 'tttttt'
                },
                basePower: 300,
                charges: 1,
                regeneration: 60,
                description: {
                    en: 'Everyone in the circle receives a boost (+50% Bonus Spell Power) making their offensive more effective. The circle disappears with an explosion, dealing heavy damage to everyone inside.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Sticky Power Circle',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Area',
                    jp: 'tttttt'
                },
                basePower: 300,
                charges: 1,
                regeneration: 60,
                description: {
                    en: 'A circle of power emanates from the caster, giving anyone inside the area a boost to their offensive abilities (+50% Bonus Spell Power). The circle can be passed on to someone else. Eventually the circle explodes, heavily damaging everyone inside.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Lightning Bolt',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 40,
                charges: 8,
                regeneration: 4,
                description: {
                    en: 'Shoots out a Lightning bolt, dealing damage and stunning the target. Bolt also jumps to other nearby targets.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Lightning Bullets',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaProjectile Throwable',
                    jp: 'tttttt'
                },
                basePower: 30,
                charges: 2,
                regeneration: 40,
                description: {
                    en: 'A throwable ring of projectiles spiral outwards and inwards, dealing Lightning damage.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Lightning Wave',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Projectile',
                    jp: 'tttttt'
                },
                basePower: 50,
                charges: 3,
                regeneration: 10,
                description: {
                    en: 'A curtain of Lightning deals damage and stuns anyone it touches.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Zapp!',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaThrowable',
                    jp: 'tttttt'
                },
                basePower: 40,
                charges: 200,
                regeneration: 25,
                description: {
                    en: 'Curses a single target with Lightning bursts, dealing damage to everyone nearby every 3 seconds.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Lightning Beam',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Channeled',
                    jp: 'tttttt'
                },
                basePower: 70,
                charges: 'n/a',
                regeneration: 12,
                description: {
                    en: 'A continuous beam of Lightning, which stuns the target.',
                    jp: 'ddddddd'
                }
            },
            {
                name: {
                    en: 'Lightning Spray',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'AreaChanneled',
                    jp: 'tttttt'
                },
                basePower: 35,
                charges: 'n/a',
                regeneration: 24,
                description: {
                    en: 'A burst of Lightning, dealing damage to everyone caught in its wake, stunning them in place.',
                    jp: 'ddddddd'
                }
            }
        ]
    },
    {
        element: 'Steam',
        list: [
            {
                name: {
                    en: 'Steam Beam',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Channeled',
                    jp: 'tttttt'
                },
                basePower: 70,
                charges: 'n/a',
                regeneration: 12,
                description: {
                    en: 'A continuous beam of Steam. Can be used to tidy up marks of vandalism.',
                    jp: 'ddddddd'
                }
            }
        ]
    },
    {
        element: 'Physical',
        list: [
            {
                name: {
                    en: 'Amadeus\'s Box',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Throwable',
                    jp: 'tttttt'
                },
                basePower: 300,
                charges: 1,
                regeneration: 60,
                description: {
                    en: 'Conjures a magical box that deals a heavy physical damage when dropped on a target. Falls apart when stood upon.',
                    jp: 'ddddddd'
                }
            }
        ]
    },
    {
        element: 'Shadow',
        list: [
            {
                name: {
                    en: 'Piercing Shadow',
                    jp: 'xxxxx'
                },
                type: {
                    en: 'Beam',
                    jp: 'tttttt'
                },
                basePower: '20-70',
                charges: 1,
                regeneration: 13.2,
                description: {
                    en: 'A stream of shadow magic which pierces all targets, freezing and inflicting moderate damage. Charges to full power when channeled for 1.7 seconds.',
                    jp: 'ddddddd'
                }
            }
        ]
    }
];
