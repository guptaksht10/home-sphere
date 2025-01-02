class ErrorHandler extends error{
    constructor(statusCode, message = 'An error is occurred', errors = [], stack) {
        super(message)
        this.statusCode = statusCode;
        this.errors = errors;
        this.stack = stack;
        this.message = message;
        this.success = false;
    }
} 

export default ErrorHandler;