game.TortoiseEntity = me.ObjectEntity.extend({

    init: function(x, y, settings) {

        settings.image = 'tortoise';
        settings.spritewidth = 64;
        settings.spriteheight = 64;


        // call the constructor
        this.parent(x, y, settings);

        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(0, 0);

        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

    }

});