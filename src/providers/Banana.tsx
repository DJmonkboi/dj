/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import { AbstractWidgetProps, StagePanelLocation, StagePanelSection, UiItemsProvider } from "@itwin/appui-abstract";
import { MyFirstWidget } from "./MyFirstWidget";

export class Banana implements UiItemsProvider {
  public readonly id = "Banana";

  public provideWidgets(
    stageId: string,
    _stageUsage: string,
    location: StagePanelLocation,
    _section?: StagePanelSection | undefined
  ): ReadonlyArray<AbstractWidgetProps> {
    const widgets: AbstractWidgetProps[] = [];

    widgets.push({
      id: "bananaWidget",
      label: "BANANA!!!!",
      getWidgetContent: () => (
        <div>
          <MyFirstWidget />
        </div>
      )
    });
    return widgets;
  }
}