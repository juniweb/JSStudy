(
    function func_conf() {
        confirm('confirm?');
    }
)();

(
    function func_conf2() {
        if (confirm('confirm?')){
            alert('confirmed!');
        }
        else {
            alert('not confirmed!');
        }
    }
)();
