const User= require('../models/User');

const getUser = async (req, res) => {
    await User.findById(req.params.id).then(user => {
        res.status(200).json(user)
    })
        .catch(err => res.status(400).json(err))
}

const getUsers = async (req, res) => {
    await User.find().then(user => {
        res.status(200).json(user)
    })
        .catch(err => res.status(400).json(err))
}
const createUser = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        country: req.body.country,
        phone: req.body.phone,
        image: req.body.image,
    })
    try {
        const savedUser = await newUser.save();
        console.log('200');
        res.status(200).json(savedUser);
    } catch (err) {
        console.log('500');
        res.status(500).json(err);
    }
}

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);

    }
}


const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('User has been deleted.'))
        .catch(err => res.status(400).json(err));
}




module.exports = {getUser, getUsers, createUser, updateUser, deleteUser, User};
