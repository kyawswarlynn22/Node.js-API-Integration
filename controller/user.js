const all = async(req, res , next ) => {
    res.json({mes: "Get All users."})
}

const get = async(req,res,next) => {
    res.json({mes: "single User."})
}

const patch = async(req,res,next) => {
    res.json({msg: 'patch single user'})
}

const post = async(req,res,next) => {
    res.json({msg: "post user data"})
}

const drop = async(req,res,next) => {
    res.json({msg: "user deleted."})
}

module.exports = {
    all,
    get, 
    patch,
    post, 
    drop
}