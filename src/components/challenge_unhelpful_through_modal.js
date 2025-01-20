import styled from "styled-components";
import "@fontsource/lato";
import colors from "../colors";
import ArrowImage from "../asset/icons/arrow.png";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: 50vw;
  max-height: 80vh;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Lato", sans-serif;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${colors.kDarkGrayColor}85;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;



const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;

  th {
    background-color: ${colors.kPrimaryColor};
    border-left: 1px solid ${colors.kStrokeColor}; 
    border-right: 1px solid ${colors.kStrokeColor};
    color: white;
    padding: 1rem;
    text-align: left;
    font-size: 0.9rem;
    &:first-child {
      border-radius: 0.5rem 0 0 0;
    }
    &:last-child {
      border-radius: 0 0.5rem 0 0;
    }
  }

  tr:nth-child(even) {
    background-color: ${colors.kPrimaryColor}20; 
  }

  tr:nth-child(odd) {
    background-color: white;
  }

  td {
    border-left: 1px solid ${colors.kStrokeColor}; 
    border-right: 1px solid ${colors.kStrokeColor};
    padding: 1rem;
    font-size: 0.9rem;
    font-weight:600;
    color: ${colors.kDarkGrayColor};
  }

  tbody tr:last-child td:first-child {
    border-radius: 0 0 0 0.5rem;
  }

  tbody tr:last-child td:last-child {
    border-radius: 0 0 0.5rem 0;
  }
`;

function ChallengeThroughModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Section>
          <p>
            First you need to be able to recognize an unhelpful thought. Then
            you can challenge it. Being aware of the common patterns that
            unhelpful thoughts follow can help you to recognize when you have
            them. Here are some of the common patterns that our unhelpful
            thoughts follow:
          </p>
        </Section>
        <Section>
          <p>
            <b>Predicting the Future:</b> When we are feeling anxious, it is
            common for us to spend a lot of time thinking about the future and
            predicting what could go wrong, rather than just letting things be.
            In the end most of our predictions don't happen and we have wasted
            time and energy being worried and upset about them.
          </p>
          <p>
            <u>For example:</u>
          </p>
          <ul>
            <li>Assuming you will perform poorly at your job interview.</li>
            <li>
              Spending the week before an exam predicting you will fail, despite
              all your hard work studying and your previous good grades.
            </li>
          </ul>
        </Section>
        <Section>
          <p>
            <b>Mind Reading:</b> This means that you make assumptions about
            others' beliefs without having any real evidence to support them.
          </p>
          <p>
            <u>For example:</u>
          </p>
          <ul>
            <li>My boss thinks I'm stupid.</li>
            <li>People think I'm weird.</li>
          </ul>
          <p>Such ways of thinking naturally make us apprehensive.</p>
        </Section>
        <Section>
          <p>
            <b>Catastrophising:</b> People commonly 'catastrophise' when they
            are anxious, which basically means that they often blow things out
            of proportion.
          </p>
          <p>
            <u>For example:</u>
          </p>
          <ul>
            <li>
              They assume that something that has happened is far worse than it
              really is (e.g. that their friend is going to dislike them because
              they cancelled a night out).
            </li>
            <li>
              They may think that something terrible is going to happen in the
              future, when, in reality, there is very little evidence to support
              it (e.g. I'm going to get into serious trouble for calling in
              sick).
            </li>
          </ul>
        </Section>
        <Section>
          <p>
            <b>Focusing on the Negatives:</b> Anxious people often have a
            tendency to focus on the negatives which keeps their anxiety going.
          </p>
          <p>
            <u>For example:</u>
          </p>
          <ul>
            <li>
              They focus on the one person at work who doesn't like them,
              ignoring that they are very popular with the rest of their
              colleagues.
            </li>
          </ul>
        </Section>
        <Section>
          <p>
            <b>Should Statement:</b> People often imagine how they would like
            things to be or how they 'should be' rather than accepting how
            things really are.
          </p>
          <p>
            <u>For example:</u>
          </p>
          <ul>
            <li>I should have got an A in History.</li>
            <li>I should never be anxious.</li>
          </ul>
          <p>
            Unfortunately when we do this, we are simply applying extra pressure
            to ourselves that can result in anxiety. Instead it can sometimes
            help to accept that things can't always be perfect.
          </p>
        </Section>
        <Section>
          <p>
            <b>Over Generalizing:</b> Based on one isolated incident you assume
            that all others will follow a similar pattern in the future.
          </p>
          <p>
            <u>For example:</u>
          </p>
          <ul>
            <li>
              When enrolling on a college course, you meet a future classmate
              who you find irritating. As a result, you worry that everyone in
              the class will be the same and you won't make any friends.
            </li>
          </ul>
        </Section>
        <Section>
          <p>
            <b>What If Statements:</b> Have you ever wondered "what if"
            something bad happens?
          </p>
          <p>
            <u>For example:</u>
          </p>
          <ul>
            <li>What if I have a panic attack at the party?</li>
            <li>What if I don't make friends when I start my new job?</li>
          </ul>
          <p>
            This type of thought can often make us avoid going places or doing
            the things that we would like.
          </p>
        </Section>
        <Section>
          <p>
            <b>Labeling:</b> Do you find that you attach negative labels to
            yourself?
          </p>
          <p>
            <u>For example:</u>
          </p>
          <ul>
            <li>I'm weak.</li>
            <li>I'm always anxious.</li>
            <li>I'm a waste of space.</li>
          </ul>
          <p>
            Labels like these really influence how we see ourselves and can
            heighten our anxiety levels.
          </p>
          <p>
            We can learn techniques to challenge these unhelpful thoughts. This
            can help to reduce your anxiety levels. The next part of this
            handout will discuss how we can go about challenging our unhelpful
            thoughts. You may come up with a more balanced thought that is
            accurate and based on evidence.
          </p>
        </Section>
        <Section>
          <h4>How to Challenge Unhelpful Thoughts</h4>
          <p>
            Once you have recognised an unhelpful thought the next stage is to
            challenge it. To do this, you can ask yourself a serious of
            questions. See the example below:
          </p>
          <p>
            <u>Situation:</u> The end of year exams are approaching
          </p>
        </Section>
        <img
          src={ArrowImage}
          alt="Arrow"
          style={{ margin: "0rem 23rem", width: "7rem" }}
        />
        <Section>
          <p>
            <u>How you feel:</u> Nervous, stressed and apprehensive.
          </p>
          <p>
            <u>Unhelpful thought:</u> I'll definitely fail my exams miserably!
          </p>
        </Section>
        <Section>
          <h4>Challenges to an unhelpful thought</h4>
          <p>
            Now you can challenge your unhelpful thoughts by asking these
            questions
          </p>
          <strong>Is there any evidence that contradicts this thought?</strong>
          <ul>
            <li>I've always done well in my previous exams.</li>
            <li>I've been scoring well in my coursework.</li>
          </ul>
          <strong>
            Can you identify any of the patterns of unhelpful thinking described
            earlier?
          </strong>
          <ul>
            <li>
              I'm 'predicting the future'. I have no evidence to suggest I'll
              fail.
            </li>
          </ul>
          <strong>
            What would you say to a friend who had this thought in a similar
            situation?
          </strong>
          <ul>
            <li>
              I'd say don't be silly, you've always done well. As long as you've
              studied hard, you should be fine. Besides, you can only try your
              best.
            </li>
          </ul>
          <strong>
            What are the costs and benefits of thinking in this way?
          </strong>
          <ul>
            <li>Costs: It's making me feel sick with worry.</li>
            <li>Benefits: I can't really think of any.</li>
          </ul>
          <strong>How will you feel about this in 6 months time?</strong>
          <ul>
            <li>
              I'll probably look back and laugh about how silly I was being.
            </li>
          </ul>
          <strong>Is there another way of looking at this situation?</strong>
          <ul>
            <li>
              I've always done well in the past so I should be ok. I can only do
              my best anyway; after all I've studied hard. At worst, I'll just
              have to re-sit next year.
            </li>
          </ul>
          <p>
            Once you have asked yourself these questions, you should read
            through your answers. Try to come up with a more balanced or
            rational view.
          </p>
          <u>For Example:</u><br/>
          <strong>
            Worrying about failing is doing me no good. I've always done well
            before so I should be fine, especially since I've prepared properly.
          </strong>
          <p>
            Try to apply these questions to the unhelpful thoughts that you
            notice. It can help to reduce your anxiety levels. You can use this
            technique to test your thoughts are realistic and balanced.
          </p>
          <strong>Thoughts Diary</strong>
          <p>Try to challenge your unhelpful thoughts using this table</p>
        </Section>
        <Table>
      <thead>
        <tr>
          <th>Situation</th>
          <th>Emotions/how
          it makes you feel</th>
          <th>Unhelpful Thought(s)</th>
          <th>Challenge(s) to Unhelpful Thought(s)</th>
          <th>Balanced Thought(s)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>I've always done well in my previous exams.<br />I’ve been scoring well in my coursework.</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>This is just one example of overthinking.<br />Focus on your preparation.</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>I've managed similar challenges before.<br />I can try my best again.</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>I have support and resources to help me.<br />I'm not alone in this.</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>I'll probably look back and realize this<br />wasn't as bad as I imagined.</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Taking small steps can make a big difference.<br />I can handle this gradually.</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default ChallengeThroughModal;
