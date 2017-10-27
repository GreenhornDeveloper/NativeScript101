exports.onNavigatedTo = function(args){
    let page=args.object;
    let gotData = page.navigationContext.info;
    let labelText = page.getViewById("newLabel")
    labelText.text = gotData;
}
