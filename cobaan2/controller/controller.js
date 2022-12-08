const { category, product, user_detail, user } = require('../models/index')
class Controller {
    static login(req, res) {
        // console.log('ini login');
        res.render('login')
    }
    static homePageUser(req, res) {
        // console.log('homepage');
        // Payment.findAll({
        //     where: {
        //         DairyId: req.query.dairyid
        //     },
        //     attributes: {
        //         exclude: ['createdAt', 'updatedAt']
        //     },
        //     include: {
        //         model: Customer,
        //         attributes: ['customerName', 'phoneNumber']
        //     }
        // })
        user.findAll({
            where: {
                role: "customer",
            },
        })
            .then((result) => {
                // console.log(result) //keluar
                res.render(result)
            }).catch((err) => {
                res.send(err)
            });
        product.findAll({
            include: {
                model: category
            }
        })
            .then((resultProduct) => {
                // console.log(resultproduct, "ini producccct") keluar
                res.render(resultProduct)
            }).catch((err) => {
                res.send(err)
            });
    }
    static userDetail(req, res) {
        // console.log('userDetail');
        let id = req.params.id
        user.findAll({
            include: {
                model: user_detail
            }
        })
            .then((result) => {
                console.log(result, id)
                // res.render('userDetail', { result, id })1
            }).catch((err) => {
                res.send(err)
            });
    }
    static addCategory(req, res) {
        // console.log('ini add');
        product.findAll({
            include: {
                model: category
            }
        })
            .then((resultProduct) => {
                // console.log(resultProduct, "ini add producccct") //keluar
                // res.render(resultProduct)
            }).catch((err) => {
                res.send(err)
            });
    }
    static postAddCategory(req, res) {
        let { form } = req.body
        namatabel.create({ form })
            .then(() => {
                res.redirect('/')
            })
            .catch((err) => {
                res.send(err)
            });
    }
    static destroy(req, res) {
        let id = +req.params.id
            // console.log(`ini delete ${id}`);
            .destroy(
                {
                    where: { id: id }
                })
            .then((result) => {
                // res.redirect('/')
                console.log('tes');
            })
            .catch((err) => {
                res.send(err)
            });
    }
}

module.exports = Controller