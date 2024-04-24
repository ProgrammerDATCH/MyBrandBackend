const errorHandler = (err, req, res, next) => {
    console.error("Error occured:", err.stack);
    res.status(500).json({resStatus: false, message: 'Internal Server Error' });
};
  
export default errorHandler;