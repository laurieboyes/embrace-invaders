game.TortoiseEntity = me.ObjectEntity.extend({

    init: function (x, y, settings) {

        settings.image = 'tortoise';
        settings.spritewidth = 64;
        settings.spriteheight = 64;


        // call the constructor
        this.parent(x, y, settings);

        this.setVelocity(1, 0);
        this.setMaxVelocity(10,0);

    },

    update: function () {        
        
        if (me.input.isKeyPressed('left')) {
            this.vel.x -= this.accel.x * me.timer.tick;
            this.flipX(false);
            
        } else if (me.input.isKeyPressed('right')) {
            this.vel.x += this.accel.x * me.timer.tick;
            this.flipX(true);
        }
        else {
            this.vel.x = 0;
        }

        this.updateMovement();

        return true;
    }



});