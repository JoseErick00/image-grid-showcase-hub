import { useEffect } from "react";

const MailchimpSubscription = () => {
  useEffect(() => {
    // Add Mailchimp CSS if not already added
    const existingLink = document.querySelector('link[href*="mailchimp"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.href = "//cdn-images.mailchimp.com/embedcode/classic-061523.css";
      link.rel = "stylesheet";
      link.type = "text/css";
      document.head.appendChild(link);
    }

    // Add Mailchimp validation script if not already added
    const existingValidationScript = document.querySelector('script[src*="mc-validate"]');
    if (!existingValidationScript) {
      const validationScript = document.createElement('script');
      validationScript.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
      validationScript.type = "text/javascript";
      document.head.appendChild(validationScript);
    }

    // Add Mailchimp initialization script if not already added
    const existingInitScript = document.querySelector('script[data-mailchimp-init]');
    if (!existingInitScript) {
      const initScript = document.createElement('script');
      initScript.type = "text/javascript";
      initScript.setAttribute('data-mailchimp-init', 'true');
      initScript.innerHTML = `
        (function($) {
          window.fnames = new Array(); 
          window.ftypes = new Array();
          fnames[0]='EMAIL';ftypes[0]='email';
          fnames[1]='FNAME';ftypes[1]='text';
          fnames[2]='LNAME';ftypes[2]='text';
          fnames[3]='ADDRESS';ftypes[3]='address';
          fnames[4]='PHONE';ftypes[4]='phone';
          fnames[5]='BIRTHDAY';ftypes[5]='birthday';
          fnames[6]='COMPANY';ftypes[6]='text';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      `;
      document.head.appendChild(initScript);
    }
  }, []);

  return (
    <div className="my-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <div id="mc_embed_shell">
          <style type="text/css">
            {`
              #mc_embed_signup {
                background: hsl(var(--brand-mid));
                clear: left;
                font: 14px Helvetica, Arial, sans-serif;
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                border-radius: 8px;
                box-shadow: var(--shadow-elegant);
                padding: 2rem;
              }
              #mc_embed_signup h2 {
                font-size: 1.5rem;
                font-weight: 600;
                margin-bottom: 1rem;
                text-align: center;
                color: hsl(var(--brand-light));
              }
              #mc_embed_signup .mc-field-group {
                margin-bottom: 1rem;
              }
              #mc_embed_signup label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 500;
                color: hsl(var(--brand-light));
              }
              #mc_embed_signup input[type="email"] {
                width: 100%;
                padding: 0.75rem;
                border: 1px solid hsl(var(--border));
                border-radius: 0.375rem;
                font-size: 1rem;
                background: hsl(var(--background));
                color: hsl(var(--foreground));
                transition: var(--transition-fast);
              }
              #mc_embed_signup input[type="email"]:focus {
                outline: none;
                border-color: hsl(var(--primary));
                box-shadow: 0 0 0 3px hsl(var(--primary) / 0.1);
              }
              #mc_embed_signup .button {
                background: hsl(var(--primary));
                color: hsl(var(--primary-foreground));
                padding: 0.75rem 1.5rem;
                border: none;
                border-radius: 0.375rem;
                font-size: 1rem;
                font-weight: 700;
                cursor: pointer;
                transition: var(--transition-fast);
                width: auto;
                min-width: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                text-align: center;
              }
              #mc_embed_signup .button:hover {
                background: hsl(var(--primary) / 0.9);
                transform: translateY(-1px);
              }
              #mc_embed_signup .indicates-required {
                margin-bottom: 1rem;
                font-size: 0.875rem;
                color: hsl(var(--muted-foreground));
              }
              #mc_embed_signup .asterisk {
                color: hsl(var(--destructive));
              }
              #mc_embed_signup .clear.foot {
                margin-top: 1rem;
              }
               #mc_embed_signup .refferal_badge {
                 margin-top: 1rem;
                 display: block;
                 text-align: center;
               }
               #mc_embed_signup .clear.foot p {
                 text-align: center;
               }
            `}
          </style>
          <div id="mc_embed_signup">
            <form 
              action="https://ineedstores.us12.list-manage.com/subscribe/post?u=b67a6d1fbcbef1d7ac467702d&amp;id=d6375be57e&amp;f_id=004d56e0f0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              className="validate" 
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <h2>Receive the latest discoveries by email.</h2>
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="EMAIL" 
                    className="required email" 
                    id="mce-EMAIL" 
                    required 
                  />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                  <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                </div>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                  <input 
                    type="text" 
                    name="b_b67a6d1fbcbef1d7ac467702d_d6375be57e" 
                    tabIndex={-1} 
                    defaultValue="" 
                  />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input 
                      type="submit" 
                      name="subscribe" 
                      id="mc-embedded-subscribe" 
                      className="button" 
                      value="Subscribe" 
                    />
                    <p style={{ margin: '0px auto' }}>
                      <a 
                        href="http://eepurl.com/jm2ULY" 
                        title="Mailchimp - email marketing made easy and fun"
                      >
                        <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                          <img 
                            className="refferal_badge" 
                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                            alt="Intuit Mailchimp" 
                            style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} 
                          />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailchimpSubscription;