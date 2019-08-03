import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../components/shared/Button";
import Editor from "../components/shared/Editor";
import TextBox from "../components/shared/TextBox";
import Login from "../components/Login";

storiesOf("Shared - Button", module)
  .add("submit", () => (
    <Button text="Post" type="submit" onClick={action("onClick()")} />
  ))
  .add("action-button", () => (
    <Button
      text="Delete"
      type="action"
      onClick={action("onClick()")}
    />
  ));

storiesOf("Shared - Editor", module)
  .add("mini", () => (
    <Editor type="mini" onChange={action("onChange()")} />
  ))
  .add("full", () => (
    <Editor type="full" onChange={action("onChange()")} />
  ));

storiesOf("Shared - TextBox", module).add("default", () => (
  <TextBox name="name" text="" label="TextLabel" onChange={action("onChange()")} />
));

storiesOf("Login", module)
  .add("default", () => (<Login user={{ email: "me@examle.com" }} />));