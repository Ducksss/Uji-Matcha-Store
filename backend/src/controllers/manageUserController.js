// imports
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const moment = require("moment-timezone");
const config = require('../config/config');
const nodeMailer = require('nodemailer');
const { codes } = require('../config/codes')

// services
const manageUsers = require('../services/manageUserService')

// configs
const transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.GMAIL_USER,
        pass: config.GMAIL_PASS,
    }
})

// Used by the secondary admin to add the user into the account with valid check
exports.addUser = async (req, res, next) => {
    try {
        let status = 0, type = "Customer";

        let { username, email, contact_number, password, address } = req.body;
        if (!(username && email && contact_number && password && type && profile_pic_url && address && status)) {
            return res.status(401).send(codes(401, 'Missing information.'));
        }

        let hashedPassword = await bcrypt.hash(password, 10);
        await manageUsers.addUser(username, email, contact_number, hashedPassword, type, profile_pic_url, address, status).catch((error) => {
            return res.status(401).send(codes(500, 'Internal error.'));
        });

        transporter.sendMail({
            //Insert admin email here
            from: 'Automated Uji Matcha Store Online Bot! <noreply@gmail.com>',
            to: `${email}`,
            subject: 'EISO Management Invitation',
            html: `
            <div>
                <center class="m_4493907587022712475wrapper">
                    <div>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="m_4493907587022712475wrapper"
                            bgcolor="#FFFFFF">
                            <tbody>
                                <tr>
                                    <td valign="top" bgcolor="#FFFFFF" width="100%">
                                        <table width="100%" role="content-container" align="center" cellpadding="0" cellspacing="0"
                                            border="0">
                                            <tbody>
                                                <tr>
                                                    <td width="100%">
                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
            
                                                                        <table width="100%" cellpadding="0" cellspacing="0"
                                                                            border="0" style="width:100%;max-width:600px"
                                                                            align="center">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td role="modules-container"
                                                                                        style="padding:0px 0px 0px 0px;color:#000000;text-align:left"
                                                                                        bgcolor="#FFFFFF" width="100%" align="left">
                                                                                        <table
                                                                                            class="m_4493907587022712475preheader"
                                                                                            role="module" border="0" cellpadding="0"
                                                                                            cellspacing="0" width="100%"
                                                                                            style="display:none!important;opacity:0;color:transparent;height:0;width:0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td role="module-content">
                                                                                                        <p></p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <table border="0" cellpadding="0"
                                                                                            cellspacing="0" align="center"
                                                                                            width="100%" role="module"
                                                                                            style="padding:0px 0px 0px 0px"
                                                                                            bgcolor="#FFFFFF">
                                                                                            <tbody>
                                                                                                <tr role="module-content">
                                                                                                    <td height="100%" valign="top">
                                                                                                        <table width="580"
                                                                                                            style="width:580px;border-spacing:0;border-collapse:collapse;margin:0px 10px 0px 10px"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            align="left" border="0"
                                                                                                            bgcolor=""
                                                                                                            class="m_4493907587022712475column">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td
                                                                                                                        style="padding:0px;margin:0px;border-spacing:0">
                                                                                                                        <table
                                                                                                                            class="m_4493907587022712475wrapper"
                                                                                                                            role="module"
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width="100%"
                                                                                                                            style="table-layout:fixed">
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px"
                                                                                                                                        valign="top"
                                                                                                                                        align="center">
                                                                                                                                        <img class="m_4493907587022712475max-width CToWUd"
                                                                                                                                            border="0"
                                                                                                                                            style="display:block;color:#000000;text-decoration:none;font-family:Helvetica,arial,sans-serif;font-size:16px;max-width:25%!important;width:25%;height:auto!important"
                                                                                                                                            width="145"
                                                                                                                                            alt=""
                                                                                                                                            src="https://res.cloudinary.com/sp-dit-chai-pin-zheng/image/upload/v1629136047/f27qbnovb3dupgcan98e.jpg">
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <table role="module" border="0"
                                                                                            cellpadding="0" cellspacing="0"
                                                                                            width="100%" style="table-layout:fixed">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit"
                                                                                                        height="100%" valign="top"
                                                                                                        bgcolor=""
                                                                                                        role="module-content">
                                                                                                        <div>
                                                                                                            <div style="font-family:inherit;text-align:start">
                                                                                                                <span style="border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:initial;border-right-style:initial;border-bottom-style:initial;border-left-style:initial;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;margin-top:0px;margin-right:0px;margin-bottom:10px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;outline-color:initial;outline-style:initial;outline-width:0px;font-weight:400;vertical-align:baseline;color:#252a2e;font-family:-apple-system,&quot;.SFNSDisplay-Regular&quot;,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;letter-spacing:normal;text-align:start;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial;font-size:16px">Dear ${honorific + " " + firstName},</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                style="font-family:inherit;text-align:start">
                                                                                                                <br></div>
                                                                                                            <div
                                                                                                                style="font-family:inherit;text-align:inherit">
                                                                                                                <span
                                                                                                                    style="border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:initial;border-right-style:initial;border-bottom-style:initial;border-left-style:initial;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;margin-top:0px;margin-right:0px;margin-bottom:10px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;outline-color:initial;outline-style:initial;outline-width:0px;font-weight:400;vertical-align:baseline;color:#252a2e;font-family:-apple-system,&quot;.SFNSDisplay-Regular&quot;,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;letter-spacing:normal;text-align:start;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial;font-size:16px">
                                                                                                                    You're on your way! 
                                                                                                                </span>
                                                                                                            </div>
                                                                                                            <div style="font-family:inherit;text-align:inherit">
                                                                                                            <br></div>
                                                                                                        <div
                                                                                                            style="font-family:inherit;text-align:inherit">
                                                                                                            <span
                                                                                                                style="border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:initial;border-right-style:initial;border-bottom-style:initial;border-left-style:initial;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;margin-top:0px;margin-right:0px;margin-bottom:10px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;outline-color:initial;outline-style:initial;outline-width:0px;font-weight:400;vertical-align:baseline;color:#252a2e;font-family:-apple-system,&quot;.SFNSDisplay-Regular&quot;,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;letter-spacing:normal;text-align:start;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial;font-size:16px">
                                                                                                                Let's confirm your email address!</span>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            style="font-family:inherit;text-align:inherit">
                                                                                                            <span
                                                                                                                style="border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:initial;border-right-style:initial;border-bottom-style:initial;border-left-style:initial;border-top-color:initial;border-right-color:initial;border-bottom-color:initial;border-left-color:initial;margin-top:0px;margin-right:0px;margin-bottom:10px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;outline-color:initial;outline-style:initial;outline-width:0px;font-weight:400;vertical-align:baseline;color:#252a2e;font-family:-apple-system,&quot;.SFNSDisplay-Regular&quot;,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;letter-spacing:normal;text-align:start;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial;font-size:16px">
                                                                                                                By clicking on the following link, you are confirming your email address.</span>
                                                                                                        </div>
                                                                                                        <div></div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <table border="0" cellpadding="0"
                                                                                        cellspacing="0" role="module"
                                                                                        style="table-layout:fixed" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" bgcolor=""
                                                                                                    style="padding:0px 0px 0px 0px">
                                                                                                    <table border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        class="m_4493907587022712475wrapper-mobile"
                                                                                                        style="text-align:center">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td align="center"
                                                                                                                    bgcolor="#321fdb"
                                                                                                                    style="border-radius:6px;font-size:16px;text-align:center;background-color:inherit">
                                                                                                                    <a href="http://localhost:3004/SignUp-Confirmation/${token}"
                                                                                                                        style="background-color:#321fdb;border:0px solid #333333;border-color:#333333;border-radius:4px;border-width:0px;color:#ffffff;display:inline-block;font-size:16px;font-weight:700;letter-spacing:0px;line-height:normal;padding:12px 18px 12px 18px;text-align:center;text-decoration:none;border-style:solid"
                                                                                                                        target="_blank"
                                                                                                                        data-saferedirecturl="https://www.google.com/url?q=http://url6312.coreui.io/ls/click?upn%3DzYcg0S-2FzDXu459e3sth3RJeidPi8smGI64DUWxreqbx7uH9dvu9SbozstYcne-2BE2VCf0757GQ1QMCUMmTbJQqUJzs-2Bns7ErRdOGnUEIt7j6YS0cgKKoO-2BxSDf8qMZ-2BFslDl6XxVKMTSpCE0qZce8ZSvMP5k0prAY0CIr-2FcSYPS5pIDojh0y2PlpTjcdpn3FYO-2F3DFHLXyUrKCgdo1KK-2F6g-3D-3DW3fN_ndFMJpcCIGXHo1VJty3Pr-2FLtmK191lDwToRcRw2pMHsjJ9N6iSgpX5Kal6lnrooJL24Y9CGJxndH85Fv-2Bqsp6Q53fj3O52IoQHaSvhm5ooqGyjL-2F0jnRCj8902bGYqj5Pis-2FLVf-2BiaGGPOgQbtLlPS9jb1IJkLRytvJECCfaALR6KQDFYuL5J6sl0-2BXCSRo2pGEw3iGLB-2FWEiiPSfkWpixT26NWCPaN4D0Ud-2By7WF1l-2BZ3meeyy9W5WTnsCbYtld-2Bg1MgFoDx21ZPlbdM6BcfzlY-2BvTOjOl5VqruCB7ncwCuUrhTncQZT88HZoEqxC78Xpayt4Nk0ohDdAOvv-2FirsBIvjpb8q9POVsGgedXORFI-3D&amp;source=gmail&amp;ust=1629219091591000&amp;usg=AFQjCNEwhklbqiHn8aJzAhOk_fs2_4QFLw">
                                                                                                                        Confirm your email address</a>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                        <table role="module" border="0"
                                                                                            cellpadding="0" cellspacing="0"
                                                                                            width="100%" style="table-layout:fixed">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit"
                                                                                                        height="100%" valign="top"
                                                                                                        bgcolor=""
                                                                                                        role="module-content">
                                                                                                        <div>
                                                                                                            <div
                                                                                                                style="font-family:inherit;text-align:inherit">
                                                                                                                <span
                                                                                                                    style="font-family:-apple-system,&quot;.SFNSDisplay-Regular&quot;,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;text-align:start;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline;font-size:16px;color:#252a2e">
                                                                                                                    If your confirmation link does not work, please contact your admin.
                                                                                                                </span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                style="font-family:inherit;text-align:inherit">
                                                                                                                <br></div>
                                                                                                            <div
                                                                                                                style="font-family:inherit;text-align:inherit">
                                                                                                                <span
                                                                                                                    style="font-family:-apple-system,&quot;.SFNSDisplay-Regular&quot;,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;text-align:start;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline;font-size:16px;color:#252a2e">Yours
                                                                                                                    regards,</span>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                style="font-family:inherit;text-align:inherit">
                                                                                                                <span
                                                                                                                    style="font-family:-apple-system,&quot;.SFNSDisplay-Regular&quot;,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;text-align:start;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline;font-size:16px;color:#252a2e">-Automated EISO Management system</span>
                                                                                                            </div>
                                                                                                            <div></div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
            
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>
                <img src="https://ci5.googleusercontent.com/proxy/CEPy5eFGvyIRlvcnCOnqlCdKECAjNDnITs_vT52gGZts_oBXlshxTwEXqEPhjlhqzWfqn-uJooDcjhWwpaskMNMe7cee7lbJe1WpyhW28UyMPJM2UmBz9ycS6iMTHjuQnL0uCXYUo5w9rwdEoIy_YTnCi6HDubCpVVC3ovkjekGZaelitJegLZiThdcywwy3cNnn83HLZgmhXdLCMULDUNTe7mQYkr3fOo_v1CprLPLkS54mayVJjwc_sIy7O7qMUawwI4IW9vpjhZsUS4gnQbSpAFvG3FvoYTct1IJ-cgR9fSlcYyV7plYjytmOvr9NN-Z_H2t_2GfkDPH7vuaUzdnuybe_d8qbcV20t-1BWKg-dtTvO_B4yyXDBryICq0YStuxu97D_15b4wIdYo5_fcmAg62F5NJDzJF710Zbh_sykdVAeBPlvGvnQz6qPHdmlhWGvrwcyrVLAUHVDLqv2HMpVhfqHmG2xFR6IpbArsINgHStc9J75zOKV3NktcS9Cne_K6AXkOUIuKn-sULKJOFL7mtlNcYZR3_iAOVtda4IKCjgFlX2JWlXLLFDLaYuVJ9kx7WQfRiw_xQ=s0-d-e1-ft#http://url6312.coreui.io/wf/open?upn=So99Xn0ChFadw29Znvo8HN8WeqVuS28KqfHIPLQzihGPnPbFuSuC7ujzRP5AjbEz4hlc3KxrnPipglYwaMdFYD02je4lirgR6iNngsTfTdKJe7vGcrVNvKk3JFcN5dPqYuCzjxizl-2FUND5MFpiQXIbJPWm7zlI3dJV5e-2BwRSTLK37KoTsOnxvnHyoJT-2B4dTGYON0OIwXE-2FOkaggpn5i0S-2BiO39LENKClxZq0mq-2BcDfUFUiNHDJNK5fiySHk-2FNYySazZDi1pPCK4irnhW8vzgGrOEbQfwPD42WhJFPTCmR1AwyO0rWBp-2FyRToTGD6eXoUX8q7y3Q8-2FdUU5BLQNvsXW7iDD-2Fs6b0CaIv7rqOzQzR4-3D"
                    alt="" width="1" height="1" border="0"
                    style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important"
                    class="CToWUd">
            </div>`
        });

        return res.status(200).send(codes(200));
    } catch (error) {
        return res.status(500).send(codes(500));
    }
};