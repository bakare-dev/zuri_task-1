let instance;

class Constriant {

    constructor () {
        if(instance) return instance;

        instance = this;
    }

    getdataConstraint = () => {
        return {
            slack_name: {
                presence: true,
                length: {
                    minimum: 1
                }
            },
            track: {
                presence: true,
                length: {
                    minimum: 1
                }
            }
        }
    }
}

module.exports = Constriant;