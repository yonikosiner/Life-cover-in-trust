import React from "react"
import styled from "styled-components"

const DescriptionWrapper = styled.div`
  position: absolute;
  bottom: -478%;
  @media (min-width: 1080px) {
    bottom: -180%;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Title = styled.h1`
  font-size: 50px;
  margin: 10px;
  color: #fff;
  span {
    color: #23d997;
  }
`

const Describe = styled.p`
  text-align: justify;
  word-wrap: break-word;
  margin: 10px;
  font-size: 26px;
`

const DescribeCenter = styled.div`
  display: flex;
`

const Late = styled.h1`
  margin: 10px;
  word-wrap: break-word;
`

const Description = () => {
  return (
    <DescriptionWrapper id="description">
      {/* The problem */}
      <Title>
        The <span>Problem</span>
      </Title>
      <DescribeCenter>
        <Describe>
          The payout may be used to repay a mortgage, provide something for the
          surviving family members to replace lost income or to simply provide
          for a funeral.
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          If you have an existing life insurance plan which is not interest, the
          proceeds will not be paid out immediately upon death and probate needs
          to take place, meaning when the monies are needed the most, the family
          may need to wait some months.
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          Furthermore, the proceeds from life insurance are considered part of
          your estate. Under current legislation, 40% inheritance tax is charged
          on any assets higher than the Inheritance Tax allowance, meaning that
          your children may end up paying 40% tax on your life insurance.
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          This means that your family may not have enough money to repay a
          mortgage or for other things that the life insurance was there for in
          the first place.
        </Describe>
      </DescribeCenter>
      {/* Example One */}
      <Title>
        Example <span>One</span>
      </Title>
      <DescribeCenter>
        <Describe>
          If Mr/Mrs A has life cover of £200,000 and it has not been written in
          trust, the £200,000 is added to his estate and if his estate is worth
          over the current threshold, Mr A’s children will need to wait for
          probate until receiving their money and they could potentially pay
          inheritance tax of £80,000 on this £200,000 alone, so the net payout
          will be somewhat less at £120,000.
        </Describe>
      </DescribeCenter>
      {/* Example two */}
      <Title>
        Example <span>Two</span>
      </Title>
      <DescribeCenter>
        <Describe>
          If Mr/Mrs B has life cover of £1m and it is not in trust, there is
          again a delay in the payout until probate is complete and there is a
          potential tax liability of 40% of £1m, which is £400,000.
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          The £400,000 tax bill could have been cut down to £0, with the
          completion of a simple ten minute trust being completed.
        </Describe>
      </DescribeCenter>
      {/* The solution */}
      <Title>
        The <span>Solution</span>
      </Title>
      <Late id="late">It's not to late!</Late>
      <DescribeCenter>
        <Describe>
          If you have an existing life insurance plan, this can be written into
          trust at any time.
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>This means the following:-</Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          - From day one, the proceeds from the life insurance will be
          ringfenced so that they fall outside of your estate
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          - Your beneficiaries will receive the proceeds from the life insurance
          without delay
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          - The payout is tax-free and there will not be any tax to pay on the
          proceeds
        </Describe>
      </DescribeCenter>
      {/* The Process */}
      <Title>
        The <span>Process</span>
      </Title>
      <DescribeCenter>
        <Describe>
          A trust can be set up any time, when a plan is starting or at any
          later point. The sooner a trust is set up, the sooner you can relax
          knowing that there will be no delay in the payout and there will not
          be any tax implications at any point.
        </Describe>
      </DescribeCenter>
      {/* Straight Forward & Quick */}
      <Title>
        Straight Forward <span>& Quick</span>
      </Title>
      <DescribeCenter>
        <Describe>
          - The plan holder is the settlor, who is setting up the trust
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          - The beneficiaries are those you wish to receive the proceeds from
          the life cover and the trust
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          - The trustees are the people you appoint to administer the trust and
          pass on the monies to the beneficiaries.   It is usually best to
          nominate two trustees, just in case you pass away with the first,
          which may be a spouse
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          - If your children are older, they can be both beneficiaries and
          trustees
        </Describe>
      </DescribeCenter>
      <DescribeCenter>
        <Describe>
          - There is the option of an absolute trust, which can not be altered
          at any point or a discretionary trust which provides flexibility to
          make changes at any point
        </Describe>
      </DescribeCenter>
      {/* Free Consolation */}
      <Title>
        Free <span>Consolation</span>
      </Title>
      <DescribeCenter>
        <Describe>
          If you are worried that your existing life insurance plans are not in
          trust, we will be able to investigate this for you without charge and
          if amendments need to be made, we will be able to assist you to make
          any necessary changes and set up the trust, quickly and efficiently.
        </Describe>
      </DescribeCenter>
    </DescriptionWrapper>
  )
}

export default Description
