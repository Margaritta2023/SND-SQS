exports.handler = async (event) => {

    console.log("Received SNS message:", JSON.stringify(event))
    const response = {
        statusCode: 200,
        body: JSON.stringify('Message logged successfully'),
    };
    return response;
};
