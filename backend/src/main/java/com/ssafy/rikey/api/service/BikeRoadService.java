package com.ssafy.rikey.api.service;

import com.ssafy.rikey.api.response.BikeRoadDetailResponseDto;
import com.ssafy.rikey.api.response.BikeRoadResponseDto;

import java.util.List;

public interface BikeRoadService {

    List<BikeRoadResponseDto> getBikeRoads(Double latitude, Double longitude);
    BikeRoadDetailResponseDto getBikeRoad(Long bikeRoadId);
}
