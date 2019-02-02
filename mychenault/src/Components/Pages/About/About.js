import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "theme";

const styles = (theme) => ({
    layout: {
        width: "auto",
        margin: "56px auto ",
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    paragraph: {
        textIndent: "50px",
    },
    mainHeader: {
        margin: "25px 0 5px",
    },
    header: {
        margin: "20px 0 5px",
    },
});

class About extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <div className={classNames(classes.layout)}>
                        <Typography
                            className={classes.mainHeader}
                            variant="h3"
                            component="h3"
                            align="center"
                        >
                            About The Trip
                        </Typography>
                        <Typography
                            className={classes.paragraph}
                            variant="p"
                            component="p"
                            align="left"
                        >
                            It was a Thursday morning around 9am when I was sitting outside of one
                            of the JMU Computer Information Systems (CIS) professor's offices. I was
                            waiting to talk to them about applying for the CIS minor when I stumbled
                            upon a flyer for a business major study abroad trip JMU was hosting.
                            This piqued my curiosity so while waiting I looked up other study abroad
                            options hosted by JMU. I came across a this CIS Web Design course for
                            CIS majors and I thought to myself, "if only I were a CIS major". After
                            being let down at the fact that being in the major was a requirement I
                            proceeded into the professor's office. Inside I asked him if he knew
                            much about the program. He said he didn't know much about it but that he
                            had believed registration for it had closed but to talk to my soon to be
                            professor, Prof. Dave Jones. I hurried up to Prof. Jones' office, 6
                            floors up, and knocked on his door. I entered and began to speak with
                            Prof. Jones. He informed me of the trip (including where it was going,
                            what was included, when the dates were) but regretted to inform me that
                            registration had closed a few months before. I sighed, and thanked him
                            for his time. As I began to leave his office I hear "Wait I may have a
                            spot! I have 14 students enrolled, but I would like to have 15. Would
                            you be interested in being student #15?". Professor Jones had given me a
                            once in a lifetime opportunity and no way was I saying no. I told him
                            that I needed to make a few phone calls, so I asked for time to think
                            about it. He replied saying he needed to know by the following morning.
                            As fast as I could I called both my parents and asked for their
                            feedback, and approval. In less than 16 hours I had sent Prof. Jones a
                            decision email, accepting his offer, making one of the most important,
                            and soon to be best, decisions of my life.
                        </Typography>
                        <Typography
                            className={classes.paragraph}
                            variant="p"
                            component="p"
                            align="left"
                        >
                            The trip was named JMU CIS 366 - Web Design in Europe. Upon completion
                            of this course the we are to be able to explain the principles of User
                            Experience and design and develop web sites using UX concepts. We would
                            develop a multi-page web site using Hypertext Markup Languages (HTML),
                            and Cascading Style Sheets (CSS), develop a page designed to respond to
                            the device being used to view it, and understand the concept of
                            server-side processing. This was right in line with me being a Computer
                            Science major. The itinerary for the trip had us visiting 4 countries in
                            Europe. We were to travel for 3 weeks visiting Galway and Dublin,
                            Ireland, Frankfurt and Saarbrucken Germany, Paris, France, and
                            Luxembourg. We had two free weekends during our three week stay where we
                            were able to do anything or go anywhere we wished. I took this time to
                            organize a trip to the Ferrari capital of the world Maranello, Italy,
                            where I had the opportunity to drive a 2017 Ferrari F488 Spider. Another
                            free weekend journey of mine was joining along a spontaneous trip to
                            Amsterdam, Netherlands with a few of the guys on the trip. There we
                            walked the canals in the city of Amsterdam along with going into a
                            awesome night club. During the trip I tried my best to experience each
                            cultures food and of the places I visited, Italy takes the cake. And
                            yes, I did have escargot in Paris. And no, it was not bad, I didnâ€™t
                            mind it. As far as the language barrier was concerned, Ireland and the
                            Netherlands predominantly spoke English. Everywhere else for the most
                            part understood us but either spoke in broken English or none at all.
                        </Typography>
                        <Typography
                            className={classes.header}
                            variant="h4"
                            component="h4"
                            align="center"
                        >
                            Mixing Business With Pleasure:
                        </Typography>
                        <Typography
                            className={classes.paragraph}
                            variant="p"
                            component="p"
                            align="left"
                        >
                            The trip was not all traveling and partying however, we were there for a
                            reason; to learn about web development. Every day during the week we
                            would have class from 9am to around 2pm, learning the ways of HTML and
                            CSS. We had quizzes we had to take and homework assignments we had to
                            turn in. By the end of the course we were to turn in a final project
                            displaying what we had learned during the class. In between our class
                            times and study times we took a group trip to two of the big four
                            accounting firms. One trip was when we were in Frankfurt, Germany to
                            KPMG. There, they talked to us about how they efficiently process large
                            sums of data that comes in from their partners. They also talked about
                            how most of the time the data that comes in is similar to each other but
                            is not always formatted or spelled correctly so they have to have code
                            that can handle similar data without it being exact. The other trip we
                            took was to SAP in Walldorf, Germany. SAP was interesting, they are the
                            major software developers behind many different applications. We talked
                            about how SAP has built many different applications for iPhone users
                            within SAP to make their jobs easier. Such apps include a shuttle app, a
                            shopping app, a messaging app, and a communications app for meetings.
                            SAP also offers a lot of benefits to its German employees like a company
                            car, day care service, schooling for kids, training sessions for
                            employees, an onsite gym, an onsite tennis court, as well as delicious
                            food options.
                        </Typography>
                        <Typography
                            className={classes.header}
                            variant="h4"
                            component="h4"
                            align="center"
                        >
                            Takeaways
                        </Typography>
                        <Typography
                            className={classes.paragraph}
                            variant="p"
                            component="p"
                            align="left"
                        >
                            If there's one thing I can take away from this trip it's that Americans
                            have it easy. We take for granted everything, we are self-centered, and
                            we are clueless of other cultures. The biggest culture shock difference
                            I noticed was that air conditioning is not a common thing in European
                            countries. Neither is ice. Yeah sure, Ireland drives on the wrong side
                            of the road, and everyone in Amsterdam speaks English but that was all
                            expected. The next biggest shock was that water in Europe was not free.
                            You had to pay â‚¬2 to get a water unless tap water was available. The
                            people varied by country. The Irish and Italian were very welcoming to
                            us where as the French and Germans, not so much. The Germans didn't
                            speak much English and weren't very social. The French also didn't speak
                            much English. As far as the French being snooty and stuck up, that only
                            happened on the streets and on subways, the restaurant staff were
                            actually very helpful. In Germany, we got multiple warnings for being
                            "too loud" in the hotel. Honestly, we were talking at what an American
                            would consider a "normal" volume so I would say the Germans may be a tad
                            bit sensitive and unwilling to adjust to Americans. Overall, I would say
                            my country preferences from most to least favorite goes as follows:
                            Ireland, Italy, Netherlands, France, Germany. The one thing that will
                            stick with me forever is that we Americans live the good life. We don't
                            have to immigrate to a better life, all our opportunity is here. Our AC
                            is in our homes, our ice is in our drinks, our neighbors don't yell at
                            us to get off the phone when in the hotel hallway talking to our
                            mothers. I'll leave my takeaways with this, "I'm proud to be an
                            American".
                        </Typography>
                        <Typography
                            className={classes.header}
                            variant="h4"
                            component="h4"
                            align="center"
                        >
                            About Me:
                        </Typography>
                        <Typography
                            className={classes.paragraph}
                            variant="p"
                            component="p"
                            align="left"
                        >
                            Hi, I'm Christian Chenault. I'm a senior Computer Science major at James
                            Madison University. I am currently researching different career
                            opportunities and paths as I am unsure of what I would like to do after
                            graduating. I have been interested in technology from a young age. In
                            middle school, I had my own website I had coded in HTML and had
                            jailbroken many iPods and xBox's. To this day, technology fascinates me.
                            I am currently employed at BestBuy as a sales consultant where I help
                            customers find their complete technological solutions. At school, I am
                            employed with the university's IT Helpdesk where I troubleshoot computer
                            and account issues for JMU students and faculty. I anticipate graduating
                            in the spring of 2018.
                        </Typography>
                        <Typography
                            className={classes.header}
                            variant="h4"
                            component="h4"
                            align="center"
                        >
                            Top 4 Highlights Per Country:
                        </Typography>
                        <Typography variant="p" component="p" align="center">
                            <strong>Ireland:</strong> Beautiful Girls, Spoke English, Happy
                            Atmosphere, Great Scenery
                            <br /> <strong>Italy:</strong> Delicious Food, Ferraris, Nice People,
                            Great Weather
                            <br /> <strong>Germany:</strong> Cool Architecture, Autobahn, Trains,
                            KPMG/Hilton Hotel
                            <br /> <strong>France:</strong> Good Food, Beautiful Landmarks, Pretty
                            Women, Lots of History
                        </Typography>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
