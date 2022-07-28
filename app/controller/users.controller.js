const Users = require('../../model/users.model');
class UserController {
   index(req, res) {
      Users.find({})
         .then((data) => res.send(data))
         .catch((error) => res.send(error));
   }
   post(req, res) {
      const user = new Users({
         name: req.body.name,
         age: req.body.age,
         address: req.body.address,
         gender: req.body.gender,
         phone: req.body.phone,
         email: req.body.email,
      });
      return user
         .save()
         .then(() => {
            res.send({
               status: 200,
               message: 'successfully',
               user,
            });
         })
         .catch((error) => res.status(404).send(error));
   }
   put(req, res) {
      const { params } = req.params;
      console.log(req.body)
      const keys = Object.keys(req.body);
      const getAndUpdate = async () => {
         const byPhone = await Users.findOne({ phone: params });
         if (await byPhone) {
            keys.forEach((key) => {
               byPhone[key] = req.body[key] || byPhone[key];
            });
            await byPhone
               .save()
               .then(() => res.send(byPhone))
               .catch((error) => res.send(error));
         } else {
            const byId = await Users.findOne({ _id: params });
            keys.forEach((key) => {
               byId[key] = req.body[key] || byId[key];
            });
            await byId
               .save()
               .then(() => res.send(byId))
               .catch((error) => res.send(error));
         }
      };
      getAndUpdate();
   }
   del(req, res) {
      const { _id } = req.params;
      Users.findByIdAndDelete(_id)
         .then((data) => res.send(data))
         .catch((error) => res.send(error));
   }
}

module.exports = new UserController();
