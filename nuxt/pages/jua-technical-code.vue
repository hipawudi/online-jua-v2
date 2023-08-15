<script>
export default {
  data() {
    return {
      classes: [
        { text: "Regulations", to: "/regulations" },
        { text: "JUA F&A Procedure", to: "/jua-procedure" },
      ],
    };
  },
};
</script>

<template>
  <div>
    <page-header :classes="classes" title="JUA F&#38;A Procedure"></page-header>
    <section
      class="bg-white 2xl:pl-24 lg:pl-16 pl-0"
      style="
        background-image: url('flex-ui-assets/elements/pattern-white.svg');
        background-position: center;
      "
    ></section>
    <section class="py-6 bg-white 2xl:pl-24 lg:pl-16 pl-0">
      <div class="container mx-auto xl:pl-16 px-4 flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p><strong>Basic Principles</strong></p>

              <ol>
                <li>
                  <p>
                    This code is binding for Asian Judo Championships held under the
                    responsibility of the JUA. It is not allowed to depart from the IJF
                    SOR.
                  </p>
                </li>
                <li>
                  <p>
                    These championships shall be allocated by the Congress. In exceptional
                    cases the JUA Directing Committee may make such an allocation on
                    behalf of the JUA Congress. The host country to hold the Asian Judo
                    Championships shall be decided at the Congress to take place 2 or 3
                    years prior to the Championships.
                  </p>
                </li>
                <li>
                  <p>
                    These championships will take place every year except the year Judo
                    competitions are held in the Asian Games under the OCA.<br />
                    Men\'s and Women\'s competition are separately held in accordance with
                    Article 5, 8 and 9 of the IJF SOR. There is not age limit. Weight
                    categories are as follows:&nbsp;
                  </p>
                </li>
              </ol>

              <p>
                <br />
                <strong>[MEN]</strong>
              </p>

              <ul>
                <li>
                  <p>Extra Light weight - up to and including 60kg</p>
                </li>
                <li>
                  <p>Half-Light weight - over 60kg up to and including 66g</p>
                </li>
                <li>
                  <p>Light weight - over 66g up to and including 73g</p>
                </li>
                <li>
                  <p>Half-Middle weight - over 73k up to and including 81kg</p>
                </li>
                <li>
                  <p>Middle weight - over 81kg up to and including 90kg</p>
                </li>
                <li>
                  <p>Half-Heavy weight - over 90kg up to and including 100kg</p>
                </li>
                <li>
                  <p>Heavy weight - over 100kg</p>
                </li>
                <li>
                  <p>
                    Open category - no weight limit&nbsp;<br />
                    &nbsp;
                  </p>
                </li>
              </ul>

              <p><strong>[WOMEN]</strong></p>

              <ul>
                <li>
                  <p>Extra Light weight - up to and including 48kg</p>
                </li>
                <li>
                  <p>Half-Light weight - over 48kg up to and including 52kg</p>
                </li>
                <li>
                  <p>Light weight - over 52kg up to and including 57kg</p>
                </li>
                <li>
                  <p>Half-Middle weight - over 57kg up to and including 63kg</p>
                </li>
                <li>
                  <p>Middle weight - over 63kg up to and including 70kg</p>
                </li>
                <li>
                  <p>&nbsp;Half-Heavy weight - over 70kg up to and including 78kg</p>
                </li>
                <li>
                  <p>Heavy weight - over 78kg</p>
                </li>
                <li>
                  <p>
                    Open category - no weight limit&nbsp;<br />
                    &nbsp;<br />
                    &nbsp;
                  </p>
                </li>
              </ul>

              <p>
                <strong>SYSTEM OF COMPETITION </strong><br />
                <br />
                The competitions at these championships will be staged in accordance with
                the IJF Refereeing Rules and along the direct elimination stem with
                repechages. The competitors of each category will be separated into two
                groups by a draw. From each group one finalist will be established by the
                direct elimination system. The two winners established by double repechage
                system will be awarded the joint 3rd place. The judo events that make the
                object of seeding and its order are shown below. The competitors will be
                seeded only when they entered in the same category as they won a medal.
              </p>

              <ol>
                <li>
                  <p>Judo events that make the object of seeding</p>
                </li>
              </ol>

              <ul>
                <li>
                  <p>
                    Olympic Games or World Judo Championships whose date is nearest to the
                    current Asian Judo Championships.
                  </p>
                </li>
                <li>
                  <p>
                    Asian Games or Asian Judo Championships whose date is nearest to the
                    current Asian Judo Championships.
                  </p>
                </li>
              </ul>

              <ol>
                <li>
                  <p>Order of seeding</p>
                </li>
              </ol>

              <ul>
                <li>
                  <p>Winners of the Olympic Games or World Judo Championships</p>
                </li>
                <li>
                  <p>Winners in the Asian Games or Asian Judo Championships</p>
                </li>
                <li>
                  <p>Runner-up in the Olympic Games or World Judo Championships</p>
                </li>
                <li>
                  <p>Runner-up in the Asian Games or Asian Judo Championships</p>
                </li>
                <li>
                  <p>3rd place in the Olympic Games or World Judo Championships</p>
                </li>
                <li>
                  <p>3rd place in the Asian Games or Asian Judo Championships&nbsp;</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
