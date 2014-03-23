game.TortoiseEntity = me.ObjectEntity.extend({

    init: function (x, y, settings) {

        settings.image = 'tortoise';
        settings.spritewidth = 64;
        settings.spriteheight = 64;


        // call the constructor
        this.parent(x, y, settings);

        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(3, 0);

    },

    update: function () {        
        
        if (me.input.isKeyPressed('left')) {
            this.vel.x = -this.accel.x;
            this.flipX(false);
            
        } else if (me.input.isKeyPressed('right')) {
            this.vel.x = this.accel.x;
            this.flipX(true);
        }
        else {
            this.vel.x = 0;
        }

        this.updateMovement();

        return true;
    }



});