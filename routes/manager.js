let express = require('express')
let router = express.Router()
const pool = require('../pool')

/**
 * @swagger
 * tags:
 *   name: manager
 *   description: 관리자 페이지
 */
/**
 * @swagger
 * /manager:
 *   get:
 *     summary: 관리자페이지
 *     tags: [manager]
 *     responses:
 *       200:
 *         description: 성공
 *       403:
 *         $ref: '#/components/res/Forbidden'
 *       404:
 *         $ref: '#/components/res/NotFound'
 *       400:
 *         $ref: '#/components/res/BadRequest'
 */
router.get('/', async (req,res,next) => {
    try{
        const data = await pool.query('select * from About')
        return res.json(data[0])
    }catch (err){
        return  res.status(400).json(err)
    }
})

module.exports = router;