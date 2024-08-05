class ApiError extends Error {
    constructor(statusCode, message= "Something went wrong", errors = [],stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;  //flag status
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError}

//for error we use node error & for req,res we use express framework 