function checkUrl(url) {
    //console.log(url, 'checkurl url');
    var pattern = /^(https?|ftp):\/\/[^\s/$.?#]+.[^\s]*$/;
    return pattern.test(url);    
};

export { checkUrl }