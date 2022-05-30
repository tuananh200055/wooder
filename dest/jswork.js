$(document).ready(function() {
    $('.accrdion .tag .tag__content').slideUp();
    $(document).on('click', '.accrdion .tag .tag__name ', function() {
        $('.accrdion .tag .tag__content').not($(this).next()).slideUp();

        $(this).next().slideToggle();

    });



    $(".btnContact").click(function(e) {
        let name = $("input[name = 'name']").val();
        let email = $("input[name = 'email']").val();
        let phone = $("input[name = 'phone']").val();
        let content = $("textarea[name = 'content']").val();
        let errors = {
            name: [],
            email: [],
            phone: [],

        };
        if (name == '') {
            errors.name.push('Name not null');
        }
        if (email == '') {
            errors.email.push('Email not null');


        } else {
            if (!isEmail(email)) {
                errors.email.push('Wrong email')
            }
        }
        if (phone == '') {
            errors.phone.push('Phone not null');
        } else {
            if (phone.length < 10 || phone.length > 11) {
                errors.phone.push('Phone must be between 10 and 11')
            }
        }

        let success = true;
        for (let i in errors) {
            $(`input[name=${i}]`).parent().find('.error').remove();


            if (errors[i].length > 0) {
                success = false;
                let htmlError = `<div class = "error"> ${errors[i][0]} </div> `;
                $(`input[name =${i}]`).parent().append(htmlError);

                $('.error').css({
                    color: 'red',
                    margin: "10px 0"
                })

            }
        }
        if (success == true) {

        }

    })


})



function isEmail(string_email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(string_email)) {
        return true;
    }

    return false;
}