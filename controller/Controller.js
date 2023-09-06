const validate = require("validate.js");
const Service = require("../services/Service");
const Constraint = require("../constraints/Constriant");


let instance;

class Controller {

    #service;
    #constraint;

    constructor () {
        if(instance) return instance;

        this.#service = new Service();
        this.#constraint = new Constraint();

        instance = this;
    }

    getdata = (req, res) => {
        try {
            const validation = validate(req.query, this.#constraint.getdataConstraint());

            if(validation) {
                res.status(400).json(validation);
                return;
            }

            this.#service.getdata(req.query, resp => {
                res.status(parseInt(resp.status)).json(resp)
            })
        } catch (ex) {
            console.log(ex);
            res.status(500).json({error: "internal server error"});
        }
    }
}

module.exports = Controller;