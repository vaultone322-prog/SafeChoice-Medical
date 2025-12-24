import { Link } from 'react-router-dom'
import { useState } from 'react'

function AbortionCare() {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div>
      {/* Banner Section */}
      <div 
        className="page-banner"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&h=600&fit=crop)'
        }}
      >
        <div className="page-banner-content">
          <h1>Abortion Pill</h1>
          <p>A safe way to end an early pregnancy at home</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* What is The Abortion Pill */}
            <div className="card animate-fade-in-up" style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: 'var(--primary-blue)', 
                marginBottom: '1rem',
                fontSize: '2rem'
              }}>
                What is The Abortion Pill?
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-gray)' }}>
                The abortion pill is also known as an <strong>Early Medical Abortion (EMA)</strong>. 
                Did you know the abortion pill is actually several pills? These pills are a safe way to 
                end an early pregnancy. You can have an early medical abortion using abortion pills 
                <strong> up to 10 weeks and 0 days of pregnancy</strong>.
              </p>
            </div>

            {/* How Do Abortion Pills Work */}
            <div className="card animate-fade-in-up" style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: 'var(--primary-blue)', 
                marginBottom: '1.5rem',
                fontSize: '2rem'
              }}>
                How Do Abortion Pills Work?
              </h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--text-gray)' }}>
                A medical abortion involves taking two different types of medication.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: 'var(--soft-blue)', 
                  borderRadius: '8px',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{ 
                    color: 'var(--primary-blue)', 
                    marginBottom: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    The First Medicine - Mifepristone
                  </h3>
                  <p style={{ marginBottom: '0.75rem', color: 'var(--text-gray)' }}>
                    <strong>Stage 1:</strong> This abortion pill ends the pregnancy. It works by blocking 
                    the hormone progesterone. Without progesterone, the womb lining breaks down and the 
                    pregnancy cannot continue to develop.
                  </p>
                  <p style={{ color: 'var(--text-gray)' }}>
                    One Mifepristone pill is taken orally (swallowed whole with water).
                  </p>
                </div>

                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: 'var(--light-green)', 
                  borderRadius: '8px',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{ 
                    color: 'var(--primary-blue)', 
                    marginBottom: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    The Second Medicine – Misoprostol
                  </h3>
                  <p style={{ marginBottom: '0.75rem', color: 'var(--text-gray)' }}>
                    <strong>Stage 2:</strong> These pills contain hormone-like substances called prostaglandins. 
                    Prostaglandins occur naturally in the body and help the womb contract. This causes cramping 
                    and bleeding. An early medical abortion is similar to an early miscarriage.
                  </p>
                  <p style={{ marginBottom: '0.75rem', color: 'var(--text-gray)' }}>
                    Up to six Misoprostol pills may be used in a medical abortion.
                  </p>
                  <p style={{ color: 'var(--text-gray)' }}>
                    4 tablets can be inserted into the vagina; tablets in the vagina will dissolve on their own. 
                    Alternatively, you can place the tablets in the mouth, between your cheek and gums to dissolve 
                    for 30 minutes before swallowing any remainder with water.
                  </p>
                </div>

                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: 'var(--soft-blue)', 
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    color: 'var(--primary-blue)', 
                    marginBottom: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    Stage 3
                  </h3>
                  <p style={{ color: 'var(--text-gray)' }}>
                    3 hours after your first dose of Misoprostol, if you are feeling well but have had no bleeding 
                    or only light spotting, you should use the additional 2 Misoprostol pills in your treatment pack. 
                    You can insert them into your vagina or in your mouth between your cheek and gums to dissolve as before. 
                    When used together, the Mifepristone and the Misoprostol will cause an abortion.
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="card animate-fade-in-up" style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: 'var(--primary-blue)', 
                marginBottom: '1.5rem',
                fontSize: '2rem'
              }}>
                What to Expect When Taking Abortion Pills
              </h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--text-gray)' }}>
                Everyone is different, so how you feel may be different to someone else.
              </p>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-gray)' }}>
                The abortion is usually complete within about <strong>4-6 hours</strong> after taking misoprostol 
                (stage 2 or 3). However, for some, it may take a little longer. Bleeding may continue for several days, 
                and light bleeding or spotting may even continue up until your next period, this is completely normal, 
                even after the abortion is complete.
              </p>

              <div style={{ 
                marginTop: '2rem',
                padding: '1.5rem', 
                backgroundColor: 'var(--light-green)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--accent-green)'
              }}>
                <h3 style={{ 
                  color: 'var(--primary-blue)', 
                  marginBottom: '1rem',
                  fontSize: '1.25rem'
                }}>
                  Potential Risks/Side Effects of Abortion Pills
                </h3>
                <p style={{ marginBottom: '1rem', color: 'var(--text-gray)' }}>
                  Abortion pills are very safe. As with any medication there are some potential risks and side effects. 
                  We will talk to you about these possible complications during your consultation. The main risks or 
                  side effects of abortion pills include:
                </p>
                <ul style={{ 
                  color: 'var(--text-gray)', 
                  lineHeight: '2',
                  paddingLeft: '1.5rem'
                }}>
                  <li>Excessive vaginal bleeding</li>
                  <li>Incomplete abortion</li>
                  <li>Infection</li>
                  <li>Allergic reactions</li>
                  <li>A feeling of light-headedness</li>
                  <li>Feeling feverish</li>
                  <li>High temperature</li>
                  <li>Diarrhoea</li>
                  <li>Nausea or sickness</li>
                </ul>
                <p style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>
                  These side effects usually settle within 24 hours of taking the second or third stage of the medication. 
                  Sometimes, you will experience similar side effects if you have started contraception after the abortion. 
                  However, if the symptoms continue or worsen, please get in touch with us.
                </p>
                <p style={{ 
                  marginTop: '1rem', 
                  color: 'var(--primary-blue)', 
                  fontWeight: '600',
                  fontSize: '0.9375rem'
                }}>
                  If your symptoms are severe, or if you develop any signs that require emergency care, do not take any 
                  more medication. Instead, seek immediate assessment from a healthcare professional or call emergency services.
                </p>
              </div>
            </div>

            {/* Bleeding Information */}
            <div className="card animate-fade-in-up" style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: 'var(--primary-blue)', 
                marginBottom: '1.5rem',
                fontSize: '2rem'
              }}>
                Bleeding During an Early Medical Abortion (EMA)
              </h2>
              <p style={{ marginBottom: '1rem', color: 'var(--text-gray)' }}>
                Bleeding is a normal part of the medical abortion process. Some patients do bleed after taking the 
                first tablet (Mifepristone). If this happens we still recommend that you take stage 2 unless your 
                bleeding is very heavy.
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-gray)' }}>
                Bleeding usually begins <strong>2 to 4 hours</strong> after taking Misoprostol (stage 2 or 3). 
                However, it can be quite normal for this to be delayed.
              </p>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-gray)' }}>
                If you have had no bleeding at <strong>48 hours</strong> after all the abortion tablets have been taken, 
                please contact us. Some patients may be advised to contact us within 24 hours if they have not bled. 
                This only applies if the nurse or midwife in clinic has advised you specifically of this.
              </p>

              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'var(--soft-blue)', 
                borderRadius: '8px',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ 
                  color: 'var(--primary-blue)', 
                  marginBottom: '1rem',
                  fontSize: '1.25rem'
                }}>
                  What to Expect with Bleeding
                </h3>
                <ul style={{ 
                  color: 'var(--text-gray)', 
                  lineHeight: '2',
                  paddingLeft: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  <li>You might experience light, moderate, or heavy bleeding</li>
                  <li>Some people pass clots, these can vary in size but should not be larger than a lemon</li>
                  <li>Once the pregnancy passes, the bleeding should start to ease</li>
                  <li>Light bleeding or spotting can continue for up to two weeks and occasionally until your next period</li>
                </ul>
                <p style={{ 
                  color: 'var(--text-gray)', 
                  fontWeight: '500',
                  marginBottom: '0.5rem'
                }}>
                  <strong>Important:</strong> Monitor your bleeding. It is preferable to use sanitary towels, not tampons 
                  or menstrual cups, during and after treatment, as this will make it easier for you to monitor your bleeding.
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'var(--light-green)', 
                borderRadius: '8px',
                borderLeft: '4px solid var(--accent-green)'
              }}>
                <h3 style={{ 
                  color: 'var(--primary-blue)', 
                  marginBottom: '1rem',
                  fontSize: '1.25rem'
                }}>
                  When to Contact Us
                </h3>
                <p style={{ marginBottom: '0.75rem', color: 'var(--text-gray)' }}>
                  Contact us if:
                </p>
                <ul style={{ 
                  color: 'var(--text-gray)', 
                  lineHeight: '2',
                  paddingLeft: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  <li>You haven't bled at all or have only light spotting 48 hours after taking misoprostol (or 24 hours if specifically advised)</li>
                  <li>You're soaking (Heavy) 2 maxi pads per hour for 2 hours in a row</li>
                </ul>
                <p style={{ 
                  color: 'var(--primary-blue)', 
                  fontWeight: '600',
                  fontSize: '0.9375rem'
                }}>
                  Call emergency services immediately if you feel unwell and are experiencing extremely heavy bleeding (known as "flooding").
                </p>
                <p style={{ marginTop: '1rem', color: 'var(--text-gray)', fontSize: '0.9375rem' }}>
                  Some people may experience a brief episode of pain, followed by a sudden gush of blood or a clot, even weeks later. 
                  If this continues, please contact us.
                </p>
              </div>
            </div>

            {/* Pain Management */}
            <div className="card animate-fade-in-up" style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: 'var(--primary-blue)', 
                marginBottom: '1.5rem',
                fontSize: '2rem'
              }}>
                Pain During an Early Medical Abortion
              </h2>
              <p style={{ marginBottom: '1rem', color: 'var(--text-gray)' }}>
                Most people are able to continue with everyday activities following the first pill, called Mifepristone.
              </p>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-gray)' }}>
                Following the second pill (Misoprostol), you may experience lower abdominal pain or cramping, along with 
                vaginal bleeding. For most people, the pain is manageable, but in some cases, it can be more intense and 
                may require strong pain relief, like codeine.
              </p>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-gray)' }}>
                The pain can be intense when the pregnancy is passing, this is normal and usually happens within 
                <strong> 2 to 4 hours</strong>, but it can happen sooner or later too. The pain can also be in your back, 
                thighs and tops of your legs.
              </p>

              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'var(--soft-blue)', 
                borderRadius: '8px'
              }}>
                <h3 style={{ 
                  color: 'var(--primary-blue)', 
                  marginBottom: '1rem',
                  fontSize: '1.25rem'
                }}>
                  Pain Relief For Your Abortion
                </h3>
                <p style={{ marginBottom: '1rem', color: 'var(--text-gray)' }}>
                  It is important that you have pain medication ready at home. Our team will talk to you about pain relief 
                  during your consultation. The best pain relief for you will depend on your medical history. Always check 
                  the labels for instructions and medical guidance.
                </p>
                <p style={{ marginBottom: '1rem', color: 'var(--text-gray)' }}>
                  Using a hot water bottle or having a warm bath can also help.
                </p>
                <p style={{ color: 'var(--text-gray)' }}>
                  Once the pregnancy has been passed, any pain that you may have usually reduces. However, if the pain is 
                  still too much, please contact us. Some mild cramps might continue for a few days to a week, and these 
                  should be manageable with regular pain relief.
                </p>
              </div>
            </div>

            {/* How to Access */}
            <div className="card animate-fade-in-up" style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: 'var(--primary-blue)', 
                marginBottom: '1.5rem',
                fontSize: '2rem'
              }}>
                How to Access Abortion Pills
              </h2>

              <div style={{ marginBottom: '2rem' }}>
                <div 
                  style={{ 
                    padding: '1.5rem', 
                    backgroundColor: 'var(--light-green)', 
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    cursor: 'pointer',
                    border: '2px solid var(--accent-green)',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => toggleSection('post')}
                >
                  <h3 style={{ 
                    color: 'var(--primary-blue)', 
                    marginBottom: '1rem',
                    fontSize: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span>Abortion Pills Taken at Home - Treatment Posted to Your Home Address</span>
                    <span style={{ fontSize: '1.25rem' }}>
                      {expandedSection === 'post' ? '−' : '+'}
                    </span>
                  </h3>
                  {expandedSection === 'post' && (
                    <div>
                      <p style={{ marginBottom: '1rem', color: 'var(--text-gray)' }}>
                        Pills by post is a safe and legal way to have an abortion. This allows you to take both sets of 
                        abortion pills in your own home, rather than attending a clinic. This treatment is available 
                        <strong> up to 10 weeks and 0 days of pregnancy</strong>.
                      </p>
                      <p style={{ color: 'var(--text-gray)' }}>
                        If you are suitable for the pills by post service, after your consultation, you will receive your 
                        abortion pills in the post. Your treatment package will include full instructions on how to take 
                        the medications and details of our aftercare service.
                      </p>
                    </div>
                  )}
                </div>

                <div 
                  style={{ 
                    padding: '1.5rem', 
                    backgroundColor: 'var(--soft-blue)', 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    border: '2px solid var(--primary-blue)',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => toggleSection('clinic')}
                >
                  <h3 style={{ 
                    color: 'var(--primary-blue)', 
                    marginBottom: '1rem',
                    fontSize: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span>Treatment Collected at a Clinic to Take at Home</span>
                    <span style={{ fontSize: '1.25rem' }}>
                      {expandedSection === 'clinic' ? '−' : '+'}
                    </span>
                  </h3>
                  {expandedSection === 'clinic' && (
                    <p style={{ color: 'var(--text-gray)' }}>
                      We do advise some people to collect the medication from one of our clinics. This will be discussed 
                      with you during your consultation, following assessment of your individual circumstance. Some people 
                      require an ultrasound, and again the questions we ask at your telephone consultation help us to 
                      determine the safest care pathway for you.
                    </p>
                  )}
                </div>
              </div>

              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'var(--soft-blue)', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem', color: 'var(--text-gray)' }}>
                  You can self-refer for a medical abortion. Call us to book a consultation.
                </p>
                <Link to="/consultation" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
                  Request Consultation
                </Link>
              </div>
            </div>

            {/* FAQs */}
            <div className="card animate-fade-in-up" style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: 'var(--primary-blue)', 
                marginBottom: '1.5rem',
                fontSize: '2rem'
              }}>
                Frequently Asked Questions
              </h2>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  color: 'var(--primary-blue)', 
                  marginBottom: '0.75rem',
                  fontSize: '1.25rem'
                }}>
                  What's the difference between the 'morning after pill' and the abortion pill?
                </h3>
                <p style={{ marginBottom: '1rem', color: 'var(--text-gray)' }}>
                  <strong>Abortion pills</strong> (used for a medical abortion) consist of two medications taken together 
                  to terminate an existing pregnancy. These medications do not contain hormones. The first pill, mifepristone, 
                  works by blocking the hormone necessary for pregnancy to progress.
                </p>
                <p style={{ color: 'var(--text-gray)' }}>
                  <strong>The emergency contraception pill</strong> (often called the 'morning after pill') is taken before 
                  pregnancy occurs. It contains hormones that delay the release of an egg, thus preventing ovulation, 
                  fertilisation of the egg after sex, and implantation.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  color: 'var(--primary-blue)', 
                  marginBottom: '0.75rem',
                  fontSize: '1.25rem'
                }}>
                  Can my GP give me an abortion pill?
                </h3>
                <p style={{ color: 'var(--text-gray)' }}>
                  GP surgeries cannot prescribe abortion pills for collection at a pharmacy. Abortion pills must be provided 
                  through a licensed clinic or a hospital.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  color: 'var(--primary-blue)', 
                  marginBottom: '0.75rem',
                  fontSize: '1.25rem'
                }}>
                  Can someone pick up the abortion pill for me?
                </h3>
                <p style={{ color: 'var(--text-gray)' }}>
                  No, if you have arranged to collect the abortion pills from a clinic, you must do so in person. However, 
                  we offer a pills-by-post service, delivering medical abortion pills directly to your home, so you don't 
                  need to visit a clinic.
                </p>
              </div>

              <div>
                <h3 style={{ 
                  color: 'var(--primary-blue)', 
                  marginBottom: '0.75rem',
                  fontSize: '1.25rem'
                }}>
                  What are the side effects of the abortion pills?
                </h3>
                <p style={{ color: 'var(--text-gray)' }}>
                  The medical abortion pill can cause diarrhoea, nausea, vomiting, light-headedness, hot flushes, and chills. 
                  These symptoms typically subside within a few hours.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="card" style={{ 
              backgroundColor: 'var(--light-green)', 
              border: '2px solid var(--accent-green)',
              textAlign: 'center',
              padding: '3rem 2rem'
            }}>
              <h3 style={{ 
                marginBottom: '1rem', 
                color: 'var(--primary-blue)',
                fontSize: '1.75rem'
              }}>
                Ready to Get Started?
              </h3>
              <p style={{ 
                marginBottom: '2rem', 
                fontSize: '1.125rem',
                color: 'var(--text-gray)'
              }}>
                Request a confidential consultation to discuss your options and receive professional 
                guidance tailored to your individual situation.
              </p>
              <Link to="/consultation" className="btn btn-primary" style={{ 
                fontSize: '1.125rem', 
                padding: '1rem 3rem',
                boxShadow: '0 4px 12px rgba(44, 95, 141, 0.3)'
              }}>
                Request Confidential Consultation
              </Link>
            </div>

            {/* Disclaimer */}
            <div style={{ 
              marginTop: '3rem',
              padding: '1.5rem', 
              backgroundColor: 'var(--soft-blue)', 
              borderRadius: '8px',
              borderLeft: '4px solid var(--primary-blue)'
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '0.875rem', 
                color: 'var(--text-gray)',
                fontStyle: 'italic',
                lineHeight: '1.8'
              }}>
                <strong>Important:</strong> This website does not provide medical advice. All services require professional 
                consultation. Our team will guide you through the consultation process and ensure you receive appropriate care 
                and support. You're not alone; support is available every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AbortionCare
